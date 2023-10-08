import { getProductsList } from "../../api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export const generateStaticParams = async () => {
	const numberOfProducts = (await getProductsList(100)).length;
	const numberOfPages = Math.ceil(numberOfProducts / 20);

	const params = [];
	for (let i = 1; i <= numberOfPages; i++) {
		params.push(String(i));
	}
	return params;
};

export default async function Home({
	params,
}: {
	params: { pageNumber: string };
}) {
	const offset = (Number(params.pageNumber) - 1) * 20;
	const products = await getProductsList(20, String(offset));

	return <ProductsList products={products} />;
}
