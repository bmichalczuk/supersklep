export const generateStaticParams = ({
	params,
}: {
	params: { category: string };
}) => {
	if (params.category === "pieski") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "3" }, { pageNumber: "4" }];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	console.log(params);
	return (
		<>
			<h1>
				Produkty z kategorii {params.category} strona{" "}
				{params.pageNumber}
			</h1>
		</>
	);
}
