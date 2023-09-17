import "server-only";
import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
export default function TestPage() {
	return (
		<>
			<ProductCounter />
			<Link href="/test2" replace={true}>
				Product
			</Link>
			<h1>Test Page 1</h1>
		</>
	);
}
