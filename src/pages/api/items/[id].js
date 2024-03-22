export default async function handler(req, res) {
	const { id } = req.query;

	try {
		const [itemResponse, descriptionResponse] = await Promise.all([
			fetch(`https://api.mercadolibre.com/items/${id}`),
			fetch(`https://api.mercadolibre.com/items/${id}/description`),
		]);

		const itemData = await itemResponse.json();
		const descriptionData = await descriptionResponse.json();

		const item = {
			id: itemData.id,
			title: itemData.title,
			price: {
				currency: itemData.currency_id,
				amount: Math.floor(itemData.price),
				decimals: +(itemData.price % 1).toFixed(2).substring(2),
			},
			picture: itemData.thumbnail,
			condition: itemData.condition,
			free_shipping: itemData.shipping.free_shipping,
			sold_quantity: itemData.sold_quantity,
			description: descriptionData.plain_text,
			categoryId: itemData.category_id, // additional field
		};

		res.status(200).json({
			author: {
				name: "Joaquin",
				lastname: "Marticorena",
			},
			item,
		});
	} catch (error) {
		res.status(500).json({
			error: "Error fetching data from MercadoLibre API",
		});
	}
}
