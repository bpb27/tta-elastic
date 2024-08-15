export const tableName = "trump_tweets";
export const indexName = "trump_tweets";

export const dbString = value => {
	const ssl = "?ssl=true&sslmode=require";
	return value.includes(ssl) ? value : `${value}${ssl}`;
};

export const logger = {
	error: (message, obj) => console.error(message, obj), // eslint-disable-line no-console
	success: (message, obj) => (obj ? console.log(message, obj) : console.log(message)), // eslint-disable-line no-console
};
