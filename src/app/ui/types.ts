
export type ProductListItemProps = {
	product: {
		name: string;
		price: number;
		category: string;
		coverImage: coverImageProps;
		id: string;
	};
};

export type coverImageProps = {
	src: string;
	alt: string;
};
