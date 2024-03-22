export default async function handler(req, res) {
	const { q: query } = req.query;

	if (!query) {
		return res
			.status(400)
			.json({ error: "A query parameter is required." });
	}

	try {
		const apiResponse = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=${query}`
		);
		const data = await apiResponse.json();

		// Extraer y formatear las categorías
		const categories =
			data.filters
				.find((filter) => filter.id === "category")
				?.values[0]?.path_from_root.map((category) => category.name) ||
			[];

		// Formatear los items
		const items = data.results.slice(0, 4).map((item) => ({
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: Math.floor(item.price),
				decimals: +(item.price % 1).toFixed(2).substring(2),
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
		}));

		res.status(200).json({
			author: {
				name: "Joaquin",
				lastname: "Marticorena",
			},
			categories,
			items,
		});
	} catch (error) {
		res.status(500).json({
			error: "Error fetching data from MercadoLibre API",
		});
	}
}
