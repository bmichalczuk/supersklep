import clsx from "clsx";
import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({
	pagesLinks,
}: {
	pagesLinks: Route[];
}) => {
	return (
		<ul aria-label="pagination" className="flex">
			{pagesLinks.map((pageHref, i) => (
				<li key={pageHref}>
					<ActiveLink
						href={pageHref}
						title={`Go to page ${i}`}
						className="border bg-inherit p-5 "
						activeClassName={clsx("bg-teal-400 text-white")}
					>
						{i + 1}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
