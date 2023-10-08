import { Suspense } from "react";
import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

/*export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};*/

export const generateMetadata = async ({
	params,
}: {
	params: { _id_: string };
}): Promise<Metadata> => {
	const product = await getProductById(params._id_);
	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProduct({
	params,
}: {
	params: { _id_: string };
}) {
	const product = await getProductById(params._id_);
	return (
		<>
			<article className="m-auto max-w-md p-10">
				<ProductCoverImage product={product} />

				<ProductListItemDescription product={product} />
				<p className="pb-6 pt-6">{product.description}</p>
			</article>
			<aside>
				<Suspense fallback="Ładowanie...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
