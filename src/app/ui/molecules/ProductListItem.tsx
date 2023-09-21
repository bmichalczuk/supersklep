import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import type { ProductListItemProps } from "@/ui/types";

export const ProductListItem = ({
	product,
}: {
	product: ProductListItemProps;
}) => {
	return (
		<Link href={`/product/${product.id}`}>
			<article className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md border-2 border-gray-200 bg-gray-200 p-4">
				<ProductCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</article>
		</Link>
	);
};
