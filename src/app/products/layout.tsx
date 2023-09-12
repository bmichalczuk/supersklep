import type { ReactNode } from "react";

export default function LayoutPage({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<main className="mx-auto flex min-h-screen flex-col items-center justify-between  p-3 sm:py-2">
			{children}
		</main>
	);
}
