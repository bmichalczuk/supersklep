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

	const products = productsResponse.map((product) => {
		return {
			product: {
				id: product.id,
				name: product.title,
				price: product.price,
				category: product.category,
				coverImage: {
					src: product.image,
					alt: product.title,
				},
			},
		};
	});

	return products;
};
