import { type ReactNode } from "react";

export default function LayoutPage({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<main className="mx-auto flex min-h-screen flex-col items-center  p-3 sm:py-2">
			<h1>Layout Page 1</h1>
			{children}
		</main>
	);
}
