import { type ProductListItemProps } from "@/ui/types";

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const res = await fetch(
		"http://naszsklep-api.vercel.app/api/products",
	);

	const productsResponse =
		(await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(
		productResponseItemToProductItemType,
	);

	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`http://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductListItemProps => {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
};
