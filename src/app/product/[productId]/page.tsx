import { getProductById } from "../../../api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
export default async function SingleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	console.log(product);
	return <ProductListItem product={product} />;
}
