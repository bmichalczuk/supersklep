import type { ReactNode } from "react";

export const generateStaticParams = () => {
	return [{ category: "pieski" }, { category: "kotki" }];
};

export default function CategryProductLayout({
	children,
}: {
	children: ReactNode;
}) {
	return children;
}
