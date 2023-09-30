"use client";

import { title } from "process";
import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import {
	usePathname,
	useSelectedLayoutSegment,
} from "next/navigation";
import type { Route } from "next";
import clsx from "clsx";

type ActiveLinkProps = {
	children: ReactNode;
	href: Route;
	title?: string;
	className: LinkProps<string>;
	activeClassName: string;
	exact?: boolean;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = false,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	console.log(useSelectedLayoutSegment() + " " + pathname);
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
