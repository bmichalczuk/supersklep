export default function StaticLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto max-w-md text-center text-blue-500">
			{children}
		</div>
	);
}
