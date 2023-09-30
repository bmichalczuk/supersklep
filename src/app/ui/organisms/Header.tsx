import Link from "next/link";
import { SiteNav } from "./SiteNav";
export const Header = () => {
	return (
		<header className="grid h-16 grid-cols-6 items-center  border-b-2 border-teal-100 px-8">
			<h1 className="col-span-1-span-1 font-serif text-2xl italic tracking-widest">
				<Link title="Idź na stronę główną" href="/">
					<span className="text-3xl font-bold text-teal-400">
						Super
					</span>
					Sklep
				</Link>
			</h1>
			<SiteNav />
			<div className="col-span-1-span-1 text-right">koszyk</div>
		</header>
	);
};
