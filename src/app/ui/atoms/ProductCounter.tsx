"use client";

import { useState } from "react";
import //useRouter,
//useParams,
//useSearchParams,
//usePathname,
//useSelectedLayoutSegment,
//useSelectedLayoutSegments,
"next/navigation";

//useSelectedLayoutSegment();
//useSelectedLayoutSegments();

export const ProductCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="flex max-w-sm">
			<button
				className="border border-slate-200 "
				onClick={() => setCount(count + 1)}
			>
				+
			</button>
			<input
				className="border border-slate-200 "
				type="text"
				readOnly
				value={count}
			/>
			<button
				className="border border-slate-200 "
				onClick={() => setCount(count - 1)}
			>
				-
			</button>
		</div>
	);
};
