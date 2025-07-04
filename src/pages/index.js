import { useState, useMemo, createContext, useEffect } from 'react';
import { cars } from '../mock/cars';
import Filters from '@/components/Filters';
import CarHeader from '@/components/CarHeader';
import CarCard from '@/components/CarCard';
import { defaultFilters } from '@/assets/constants';
import filterCars from '@/utils/filterCars';

export const FilterContext = createContext();

export default function Home() {


  const [filters, setFilters] = useState(defaultFilters);

  const filteredCars = filterCars(cars, filters);

  const [filtersOpen, setFiltersOpen] = useState(false);


  return (
    <main className='mt-16 px-4'>
      <div className='mx-auto max-w-screen-2xl min-h-screen'>
        <FilterContext.Provider value={{ filters, setFilters }}>
          <div className='flex flex-col gap-[40px] lg:flex-row'>
            <Filters open={filtersOpen} onClose={() => setFiltersOpen(false)} />
            <div className='w-full'>
              <CarHeader filteredCarsCount={filteredCars.length} onOpen={() => setFiltersOpen(true)} />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </FilterContext.Provider>
      </div>
    </main>
  );
}
