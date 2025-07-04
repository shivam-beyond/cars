import cart from "@/assets/cart";
import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <Link href="#" className="group rounded-lg overflow-hidden border border-transparent hover:border-primary-300 transition-all duration-200 ease-in-out h-[100%] flex flex-col hover:shadow-lg">
      <div className="h-56 w-full overflow-hidden">
        <img className="h-full w-full object-cover" src={car?.image} alt={car?.make} loading="lazy" />
      </div>
      <div className="bg-white p-4 shadow-sm dark:bg-gray-800 flex-1 flex flex-col">

        <div href="#" className="max-lg:text-base text-lg font-bold leading-tight text-gray-900 dark:text-gray-300">{car?.year} ・ {car?.make} {car?.model}</div>

        <p className="text-sm mt-1 font-medium text-gray-500 dark:text-gray-400">{car?.trim} ・ {car?.mileage?.toLocaleString()} miles・ {car?.color}</p>

        <div className="pt-4 mt-auto flex items-center justify-between gap-4">
          <p className="text-xl max-lg:text-base font-extrabold leading-tight text-gray-900 dark:text-gray-200">${car?.price?.toLocaleString()}/mo</p>

          <div className="inline-flex gap-2 items-center rounded-lg bg-[#fff3] px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-[#fff2] dark:group-hover:bg-primary-500 dark:focus:ring-primary-800">
            {cart}
            Get Now
          </div>
        </div>
      </div>
    </Link>
  );
}