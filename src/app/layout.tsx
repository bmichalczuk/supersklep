import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
				{children}

				<footer className="text-center text-sm text-gray-500">
					@2023
				</footer>
			</body>
		</html>
	);
}
