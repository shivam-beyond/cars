export default function Checkbox({ label, id, value, onChange, checked }) {
	return <label htmlFor={'checkbox-' + id} className="flex gap-3 cursor-pointer items-center mb-4 text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
		<input id={'checkbox-' + id} type="checkbox" checked={checked} value={value} onChange={onChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
		{label}
	</label>
}