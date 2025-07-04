import logo from "@/assets/logo";
import Link from "next/link";
import { footerLinks } from "@/assets/constants";

export default function Footer() {
	return <footer className="p-4 mt-24 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
		<div className="mx-auto max-w-screen-xl text-center">
			<Link href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-gray-300">
				{logo}
			</Link>
			<p className="mt-4 mb-6 text-gray-500 dark:text-gray-400">Live large. Spend small.</p>
			<ul className="flex flex-wrap gap-4 justify-center items-center mb-6 text-gray-900 dark:text-white">
				{footerLinks.map((link, i) => (
					<li key={i}>
						<Link href={link.path} className="hover:underline">
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Flexcar, LLC. All rights reserved.</span>
		</div>
	</footer>
}