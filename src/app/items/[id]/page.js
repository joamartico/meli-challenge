import Head from "next/head";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Button from "../../../components/Button/Button";
import Navbar from "../../../components/Navbar/Navbar";
import styles from "./page.module.scss";

const ItemPage = async ({ params }) => {
	const { id } = params;

	const { item } = await fetch(
		`http://localhost:3000/api/items/${id}`
	).then((res) => res.json());

	const categories = await fetch(
		`https://api.mercadolibre.com/categories/${item.categoryId}`
	).then((res) => res.json());

	return (
		<>
			<Navbar />

			<Breadcrumbs
				categories={categories.path_from_root.map(
					(category) => category.name
				)}
			/>

			<div className={styles["productContainer"]}>
				<div className={styles["topContainer"]}>
					<img src={item.picture} alt={item.title} />

					<div className={styles["infoContainer"]}>
						<p className={styles["condition"]}>
							{item.condition === "new" ? "Nuevo" : "Usado"}
							{item.sold_quantity
								? ` - ${item.sold_quantity} vendidos`
								: ""}
						</p>

						<h1>{item.title}</h1>

						<p className={styles["price"]}>
							${" "}
							{parseInt(item.price.amount).toLocaleString(
								"es-AR"
							)}
						</p>

						<Button>Comprar</Button>
					</div>
				</div>

				<h2>Descripción del producto</h2>
				<p className={styles["description"]}>{item.description}</p>
			</div>
		</>
	);
};

export default ItemPage;
