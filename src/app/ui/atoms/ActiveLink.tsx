"use client";

import { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps<Href> = {
	activeClassName: string;
	className?: string;
	exact?: boolean;
	children: ReactNode;
	title: string;
} & LinkProps<Href>;

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = true,
	title,
}: ActiveLinkProps<string>) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: pathname.startsWith(String(href));

	return (
		<Link
			className={clsx(className, isActive && activeClassName)}
			href={href}
			title={title}
			aria-current={true}
			role="link"
			{...(isActive && { "aria-current": "page" })}
		>
			{children}
		</Link>
	);
};
