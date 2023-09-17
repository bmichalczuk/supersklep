import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "products",
};
const mainClassName = `${inter.className}`;
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={mainClassName}>
				<nav>
					<ul className="mb-2 flex items-center justify-center space-x-4 p-3 ">
						<li>
							<ActiveLink href="/">Home</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">Products</ActiveLink>
						</li>
					</ul>
				</nav>
				{children}

				<footer className="text-center text-sm text-gray-500">
					@2023
				</footer>
			</body>
		</html>
	);
}
