import { ProductsList } from "@/ui/organisms/ProductsList";

export default function Home() {
	return (
		<main className="mx-auto flex min-h-screen flex-col items-center justify-between  p-3 sm:py-2">
			<ProductsList />
		</main>
	);
}
