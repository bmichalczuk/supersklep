import clsx from "clsx";
import { ActiveLink } from "../atoms/ActiveLink";
export const Pagination = ({
	pagesLinks,
}: {
	pagesLinks: string[];
}) => {
	return (
		<ul aria-label="pagination" className="flex">
			{pagesLinks.map((pageHref, i) => (
				<li key={pageHref}>
					<ActiveLink
						href={pageHref}
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
