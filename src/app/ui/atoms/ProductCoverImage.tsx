import Image from "next/image";
import type { ProductListItemProps } from "@/ui/types";

export const ProductCoverImage = ({
	product,
}: {
	product: ProductListItemProps;
}) => {
	return (
		<div className="aspect-square">
			<Image
				height={320}
				width={320}
				src={product.coverImage.src}
				alt={product.coverImage.alt}
				className="h-full w-full rounded-md border-2 border-gray-200 object-fill object-center p-4 transition hover:scale-105"
			/>
		</div>
	);
};
