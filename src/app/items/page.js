import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ItemResult from "../../components/ItemResult/ItemResult";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./page.module.scss";

const ItemsPage = async ({ searchParams }) => {
	const { items, categories } = await fetch(
		`http://localhost:3000/api/items?q=${searchParams.search}`
	).then((res) => res.json());


	return (
		<>
			<Navbar defaultValue={searchParams.search} />
			<Breadcrumbs categories={categories ?? []} />
			<div className={styles["itemsContainer"]}>
				{items?.map((item) => (
					<ItemResult
						key={item.id}
						id={item.id}
						item={item}
						price={item.price.amount}
						title={item.title}
						picture={item.picture}
						condition={item.condition}
						free_shipping={item.free_shipping}
					/>
				))}
			</div>
		</>
	);
};

export default ItemsPage;
