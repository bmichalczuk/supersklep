import { Suspense } from "react";
import {
	getProductById,
	getProductsList,
} from "../../../api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};

export default async function SingleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-md">
				<ProductCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback="Ładowanie...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
