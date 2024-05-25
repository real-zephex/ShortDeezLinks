"use server";

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

// parent function for interacting with the database
export async function openDB() {
	const dbPath = path.resolve(process.cwd(), "database", "index.db");
	return open({
		filename: dbPath,
		driver: sqlite3.Database,
	});
}

// This will try to create a table named link_paths but will ignore if it doesn't exists
export const CREATE_DATABASE = async () => {
	const db = await openDB();

	await db.exec(`
	  CREATE TABLE IF NOT EXISTS link_paths (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		parent_link TEXT NOT NULL UNIQUE,
		shortcode  TEXT NOT NULL UNIQUE
	  )
	`);

	console.log("Table created successfully");
};

// adds the parent link and the generated shortcode to the database
export const ADD_DATA = async (link: string, shortcode: string) => {
	const db = await openDB();

	try {
		await db.run(
			"INSERT INTO link_paths (parent_link, shortcode) VALUES (?, ?)",
			[link, shortcode],
		);

		return true;
	} catch (error) {
		return false;
	}
};

// Search by parent link
// used for checking whether the short code for the provided link already exists or not
export const QUERY_BY_LINK = async (link: string) => {
	try {
		const db = await openDB();
		const short = await db.get(
			"SELECT shortcode FROM link_paths where parent_link = ?",
			[link],
		);
		return short;
	} catch (error) {
		return false;
	}
};

// Search by short code
// used when redirecting
export const QUERY_BY_ID = async (shortcode: string) => {
	try {
		const db = await openDB();
		const parent_link = await db.get(
			"SELECT parent_link FROM link_paths where shortcode = ?",
			[shortcode],
		);
		return parent_link;
	} catch (error) {
		return false;
	}
};

// IMPORTANT: I am pretty new to js, ts and the whole ecosystem tbh. I don't know how secure my approach is but I learnt python during my high school and I tried to implement that knowledge here in this project. Sorry, if my code gives you an eyesore but I believe creating projects is the only way one can learn a new language.
