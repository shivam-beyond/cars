export default function filterCars(cars, filters) {

	let result = []

	const isMakeFilter = Object.values(filters.make).some(Boolean);
	const isColorFilter = Object.values(filters.color).some(Boolean);
	const sortType = filters.sort;
	const { make: makeFilter, color: colorFilter } = filters;

	cars.forEach(car => {
		if (car.zip != filters.zip) {
			return;
		}

		const { make, color } = car;


		if (isMakeFilter && !makeFilter[make?.toLowerCase()]) {
			return;
		}

		if (isColorFilter && !colorFilter[color?.toLowerCase()]) {
			return;
		}

		result.push(car);
	});

	if (sortType !== 'default') {
		if (sortType === 'priceLow') {
			result.sort((a, b) => a.price - b.price);
		} else if (sortType === 'priceHigh') {
			result.sort((a, b) => b.price - a.price);
		} else if (sortType === 'recent') {
			result.sort((a, b) => b.year - a.year);
		} else if (sortType === 'mileageLow') {
			result.sort((a, b) => a.mileage - b.mileage);
		} else if (sortType === 'mileageHigh') {
			result.sort((a, b) => b.mileage - a.mileage);
		}
	}

	return result;
}
