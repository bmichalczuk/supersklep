import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductListItemProps } from "@/ui/types";

export const ProductsList = ({
	products,
}: {
	products: ProductListItemProps[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="grid max-w-4xl grid-cols-1 gap-8 sm:grid sm:grid-cols-2 xl:grid-cols-4"
		>
			{products.map((product: ProductListItemProps) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
};
