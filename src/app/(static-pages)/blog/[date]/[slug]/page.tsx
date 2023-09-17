export default function BlogPage({
	params,
}: {
	params: { date: string; slug: string };
}) {
	return (
		<>
			<h1>
				Blog {params.date}:{params.slug}
			</h1>
		</>
	);
}
