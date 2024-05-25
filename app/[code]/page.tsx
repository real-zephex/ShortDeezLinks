"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { QUERY_BY_ID } from "@/components/db";

type Params = {
	code: string;
};

interface RedirectProps {
	params: Params;
}

const RedirectPage: React.FC<RedirectProps> = ({ params }) => {
	const router = useRouter();

	const { code } = params;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const link = await QUERY_BY_ID(code);
				if (link) {
					router.push(link.parent_link);
				} else {
					alert("Invalid ID");
					return;
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				alert("An error occurred while fetching data");
			}
		};

		fetchData();
	}, [code, router]);

	return (
		<div>
			<p className="text-center">Redirecting with code: {code}</p>
		</div>
	);
};

export default RedirectPage;
