"use server";

import { QUERY_BY_LINK, ADD_DATA, CREATE_DATABASE } from "@/components/db";

export const ExistsOrNot = async (url: string) => {
	await CREATE_DATABASE();

	const results = await QUERY_BY_LINK(url);
	if (!results) {
		const code = generateRandomCode();
		await ADD_DATA(url, code);
		const newResults = await QUERY_BY_LINK(url);
		return newResults ? newResults : code;
	} else {
		return results;
	}
};

function generateRandomCode() {
	const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
	const codeLength = 6;
	let randomCode = "";

	for (let i = 0; i < codeLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		randomCode += characters[randomIndex];
	}

	return randomCode;
}
