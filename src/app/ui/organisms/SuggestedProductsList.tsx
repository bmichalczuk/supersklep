import { ProductsList } from "./ProductsList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();

	return (
		<aside className="px-auto m-auto">
			<ProductsList products={products.slice(-4)} />
		</aside>
	);
};
