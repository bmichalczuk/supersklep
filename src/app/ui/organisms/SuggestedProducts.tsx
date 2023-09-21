import { getProductsList } from "../../../api/products";
import { ProductsList } from "./ProductsList";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();

	return <ProductsList products={products.slice(-4)} />;
};
