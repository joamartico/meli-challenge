import Navbar from "../../../components/Navbar/Navbar";
import styles from "./page.module.scss";

const ItemPage = async ({ params }) => {
	const { id } = params;

	const { item, author } = await fetch(
		`http://localhost:3000/api/items/${id}`
	).then((res) => res.json());

	console.log("item", item);

	const categories = await fetch(
		`https://api.mercadolibre.com/categories/${item.categoryId}`
	).then((res) => res.json());

	return (
		<>
			<Navbar />

			{/* {categories.path_from_root.map((category, index) => (
					<span key={index}>
						{category.name}
						{index < categories.path_from_root.length - 1 && " > "}
					</span>
				))} */}

			<div className={styles["productContainer"]}>
				<div className={styles["topContainer"]}>
					<img src={item.picture} alt={item.title} />

					<div className={styles["infoContainer"]}>
						<h1>{item.title}</h1>
						<p className={styles["price"]}>
							${" "}
							{parseInt(item.price.amount).toLocaleString(
								"es-AR"
							)}
						</p>

						<button>Comprar</button>
					</div>
				</div>

				<h2>Descripción del producto</h2>
				<p className={styles["description"]}>{item.description}</p>
			</div>
		</>
	);
};

export default ItemPage;
