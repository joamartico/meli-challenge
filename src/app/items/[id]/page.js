import Navbar from "../../../components/Navbar/Navbar";
import styles from "./page.module.scss";

const Item = async ({ params }) => {
	const { id } = params;

	const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
		(res) => res.json()
	);

	const description = await fetch(
		`https://api.mercadolibre.com/items/${id}/description`
	).then((res) => res.json());

	return (
		<>
			<Navbar />

			<div className={styles["productContainer"]}>
				<div className={styles["topContainer"]}>
					<img src={item.thumbnail} alt={item.title} />

					<div className={styles["infoContainer"]}>
						<h1>{item.title}</h1>
						<p className={styles["price"]}>
							$ {parseInt(item.price).toLocaleString("es-AR")}
						</p>

						<button>Comprar</button>
					</div>
				</div>

				<h2>Descripción del producto</h2>
				<p className={styles["description"]}>
					{description.plain_text}
				</p>
			</div>
		</>
	);
};

export default Item;
