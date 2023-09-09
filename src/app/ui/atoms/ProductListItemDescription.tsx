import { formatMoney } from "@/ui/utils";
import type { ProductListItemProps } from "@/ui/types";

export const ProductListItemDescription = ({
	product,
}: ProductListItemProps) => {
	return (
		<div className="grid w-full grid-cols-2 sm:grid-cols-1">
			<h3 className="col-span-1 gap-1 p-1 font-bold">
				{product.name}
			</h3>
			<p className="col-span-1 gap-1 p-1 font-bold">
				{formatMoney(product.price)}
			</p>
			<p className="col-span-2 p-1 text-sm font-light">
				{product.category}
			</p>
		</div>
	);
};
