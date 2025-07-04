export default function Accordion({ title, content, id, open, onChange }) {
	return <div data-accordion={open ? 'open' : 'closed'}>
		<h4 id={"accordion-open-heading-" + id}>
			<button
				onClick={() => onChange(!open, id)}
				type="button"
				className="py-4 px-6 flex items-center justify-between w-full font-medium rtl:text-right text-gray-500 border-t border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={"#accordion-open-body-" + id} aria-expanded="true" aria-controls={"#accordion-open-body-" + id}>
				<span className="flex items-center font-bold">{title}</span>
				<svg data-accordion-icon className={"w-3 h-3 shrink-0 transition-transform duration-200 ease-in-out " + (open ? "" : "rotate-180")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
				</svg>
			</button>
		</h4>
		<div id={"accordion-open-body-" + id} className={open ? "" : "hidden"} aria-labelledby={"accordion-open-heading-" + id}>
			<div className="py-4 px-6">
				{content}
			</div>
		</div>
	</div>
}
