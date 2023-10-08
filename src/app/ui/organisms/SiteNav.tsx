import { ActiveLink } from "../atoms/ActiveLink";

export const SiteNav = () => {
	const activeLinkClassName =
		"p-5 font-medium uppercase tracking-wider";
	const activeLinkActiveClassName = "bg-teal-400";
	return (
		<nav className="col-span-4 flex h-full items-center  justify-center   ">
			<ul className="flex justify-center space-x-1  ">
				<li>
					<ActiveLink
						className={activeLinkClassName}
						activeClassName={activeLinkActiveClassName}
						href="/"
						title="Strona Główna"
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						href="/products"
						title="Lista produktów"
						className={activeLinkClassName}
						activeClassName={activeLinkActiveClassName}
						exact={false}
					>
						Products
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
