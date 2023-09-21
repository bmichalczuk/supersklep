import { getProductById } from "../../../api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
export default async function SingleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	console.log(product);
	return (
		<article>
			<ProductCoverImage product={product} />
			<ProductListItemDescription product={product} />
			<SuggestedProductsList />
		</article>
	);
}
