import { useContext, useEffect, useMemo, useState } from "react";
import Accordion from "./Accordion";
import { carColors, carMakes, defaultFilters } from "@/assets/constants";
import Checkbox from "./Checkbox";
import { FilterContext } from "../pages/index";
import filterCount from "@/utils/filterCount";

export default function Filters({ open, onClose }) {

	const { filters, setFilters } = useContext(FilterContext);

	const [accordion, setAccordion] = useState({
		make: true,
		color: true
	});


	const onClear = () => {
		setFilters((filters) => ({
			...filters,
			make: defaultFilters.make,
			color: defaultFilters.color,
		}));
	}

	const fCounts = useMemo(() => filterCount(filters), [filters]);

	return <div className={'sticky max-lg:fixed top-[32px] overflow-hidden max-lg:bg-black max-lg:z-10 max-lg:bottom-0 max-lg:left-0 max-lg:top-auto max-lg:w-full h-fit max-h-[calc(100vh-64px)] w-[340px] max-xl:w-[240px] flex-shrink-0 flex-col rounded-lg lg:flex bg-[#0006] ' + (open ? 'block' : 'hidden')}>
		<div className='flex gap-3 items-center py-4 px-6'>
			<h3 className='text-md font-bold'>Filters {fCounts > 0 ? `(${fCounts})` : ''}</h3>
			<button className='text-sm ml-auto text-blue-300 cursor-pointer hover:text-blue-500 font-bold' onClick={onClear}>Clear</button>
			<button className='lg:hidden inline-flex gap-2 items-center rounded-lg bg-[#fff3] px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-4  focus:ring-primary-300  dark:focus:ring-primary-800' onClick={onClose}>Close</button>
		</div>
		<div className="overflow-auto flex-1 max-h-[inherit] max-lg:pb-[64px]">
			<div className='flex flex-col'>
				<Accordion
					id={'make'}
					open={accordion.make}
					onChange={(value, id) => setAccordion({ ...accordion, [id]: value })}
					title="Make"
					content={<div>
						{
							carMakes.map((make) => (
								<Checkbox
									key={make.id}
									label={make.label}
									id={'make-' + make.id}
									value={make.value}
									checked={filters.make[make.value]}
									onChange={() => {
										setFilters({ ...filters, make: { ...filters.make, [make.value]: !filters.make[make.value] } })
									}}
								/>
							))
						}
					</div>}
				/>
				<Accordion
					id={'color'}
					open={accordion.color}
					onChange={(value, id) => setAccordion({ ...accordion, [id]: value })}
					title="Color"
					content={<div>
						{
							carColors.map((color) => (
								<Checkbox
									key={color.id}
									label={<div className="flex w-full items-center justify-between gap-2">{color.label} <span className="w-4 h-4 border border-gray-300 rounded-full" style={{ backgroundColor: color.color }}></span></div>}
									id={'color-' + color.id}
									value={color.value}
									checked={filters.color[color.value]}
									onChange={() => {
										setFilters({ ...filters, color: { ...filters.color, [color.value]: !filters.color[color.value] } })
									}}
								/>
							))
						}
					</div>}
				/>
			</div>
		</div>
	</div>
}