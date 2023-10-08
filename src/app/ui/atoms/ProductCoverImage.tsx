import Image from "next/image";
import type { ProductListItemProps } from "@/ui/types";

export const ProductCoverImage = ({
	product,
}: {
	product: ProductListItemProps;
}) => {
	return (
		<div className="m-auto aspect-square w-fit">
			<Image
				height={320}
				width={320}
				src={product.coverImage.src}
				alt={product.coverImage.alt}
				className="h-full w-auto rounded-md border-2 border-gray-200 object-fill object-center p-2 transition hover:scale-105"
			/>
		</div>
	);
};
