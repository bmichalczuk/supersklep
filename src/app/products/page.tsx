import { getProductsList } from "../api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Home() {
	const products = await getProductsList();

	return <ProductsList products={products} />;
}
