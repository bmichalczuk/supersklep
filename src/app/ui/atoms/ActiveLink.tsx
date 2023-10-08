"use client";

import { title } from "process";
import Link from "next/link";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import clsx from "clsx";

type ActiveLinkProps = {
	children: ReactNode;
	href: Route;
	title?: string;
	className: string;
	activeClassName: string;
	exact?: boolean;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = true,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href);
	return (
		<Link
			className={clsx(className, isActive && activeClassName)}
			href={href}
			title={title}
			aria-current={isActive ? true : false}
		>
			{children}
		</Link>
	);
};
