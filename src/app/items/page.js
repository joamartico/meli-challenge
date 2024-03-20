import ItemResult from "../../components/ItemResult/ItemResult";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./page.module.scss";

const ItemsPage = async ({ searchParams }) => {
	const { results } = await fetch(
		`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}`
	).then((res) => res.json());

	return (
		<>
			<Navbar defaultValue={searchParams.search} />

			<div className={styles["itemsContainer"]}>
				{results.map((item) => (
					<ItemResult key={item.id} item={item} />
				))}
			</div>
		</>
	);
};

export default ItemsPage;
