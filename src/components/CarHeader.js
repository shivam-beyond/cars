import location from "@/assets/location";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/index";
import useDebouncedEffect from "@/hooks/useDebounceEffect";
import filter from "@/assets/filter";

export default function CarHeader({ filteredCarsCount, onOpen }) {

	const { filters, setFilters } = useContext(FilterContext);

	const [zip, setZip] = useState(filters.zip);

	const onChangeZip = (e) => {
		let code = e.target.value;
		code = code.replace(/\D/g, '');
		if (code.length > 5) return;
		setZip(code);
	}


	useDebouncedEffect(() => {
		setFilters({ ...filters, zip: zip });
	}, [zip]);

	const [error, setError] = useState('');

	useEffect(() => {
		if (filteredCarsCount === 0) {
			if (!zip) {
				setError('Zip code is required.');
			} else if (zip?.toString()?.length < 5) {
				setError('Please enter a valid zip code.');
			} else {
				setError('');
			}
		} else {
			setError('');
		}
	}, [filteredCarsCount, filters.zip]);


	return <div className="w-full mb-6">


		<div className="flex lg:hidden items-center justify-between mb-4">
			<button className="flex items-center gap-2" onClick={onOpen}><span className="text-gray-500">{filter}</span> Filters</button>
			<div className="text-sm text-gray-600 dark:text-gray-400">
				{
					filteredCarsCount > 0 ? `Showing ${filteredCarsCount} results.` : 'No results found.'
				}
			</div>
		</div>


		<div className="flex flex-wrap items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
			<div className="flex flex-wrap gap-4 w-auto">
				<div className="relative w-[180px] mb-0 sm:mb-0 sm:mr-4">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<span className="text-gray-500 dark:text-gray-400">{location}</span></div><label htmlFor="search" className="hidden">Search Zipcode</label>
					<input
						value={zip}
						onChange={onChangeZip}
						id="search" type="text" className="bg-white order border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Zipcode" />
				</div>

				<label htmlFor="category" className="hidden">Sort By:</label>
				<select value={filters.sort} onChange={(e) => setFilters({ ...filters, sort: e.target.value })} id="category" className="bg-white h-auto border w-[180px] cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="default">Default</option>
					<option value="priceLow">Price: Low to High</option>
					<option value="priceHigh">Price: High to Low</option>
					<option value="recent">Recently Added</option>
					<option value="mileageLow">Low Mileage</option>
					<option value="mileageHigh">High Mileage</option>
				</select>
			</div>

			<div className="hidden text-sm text-gray-600 dark:text-gray-400 sm:block">
				{
					filteredCarsCount > 0 ? `Showing ${filteredCarsCount} results.` : 'No results found.'
				}
			</div>
		</div>

		{
			error &&
			<div className="p-4 mb-4 mt-5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
				{error}
			</div>
		}

		{
			!error && filteredCarsCount < 1 && <div className="flex flex-col text-center justify-center p-4 mb-4 mt-5 text-sm text-gray-800 dark:text-gray-300" role="alert">
				<img src="/images/empty.svg" alt="No results found" className="w-28 opacity-75 block mx-auto mb-2" />
				<span className="font-medium">No results found.</span>
			</div>
		}


	</div>
}