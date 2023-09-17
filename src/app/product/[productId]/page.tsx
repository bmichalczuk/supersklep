export default async function SingleProduct({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const referral = searchParams.referral.toString();
	return (
		<>
			<h1>{params.productId}</h1>
			<p>{referral}</p>
		</>
	);
}
