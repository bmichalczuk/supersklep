import type { ReactNode } from "react";
import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
export default async function LayoutPage({
	children,
}: {
	children: ReactNode;
}) {
	const numberOfProducts = (await getProductsList(100)).length;
	const numberOfPages = Math.ceil(numberOfProducts / 20);
	const params = [];
	for (let i = 1; i <= numberOfPages; i++) {
		params.push(`/products/${i}`);
	}

	return (
		<>
			<main className="mx-auto flex min-h-screen flex-col items-center justify-between  p-3 sm:py-2">
				{children}
			</main>
			<nav className="mx-auto flex min-h-screen flex-col items-center justify-between  p-3 sm:py-2">
				<Pagination pagesLinks={params} />
			</nav>
		</>
	);
}
