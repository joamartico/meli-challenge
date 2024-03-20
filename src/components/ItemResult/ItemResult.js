import Link from "next/link";
import styles from "./ItemResult.module.scss";

const ItemResult = ({ key, item }) => {
	return (
		<Link href={`/items/${item.id}`} key={key} className={styles["item"]}>
			<img src={item.thumbnail} alt={item.title} />

			<div className={styles["item__info"]}>
				<p className={styles["item__price"]}>
					$ {parseInt(item.price).toLocaleString("es-AR")}
				</p>
				<p className={styles["item__title"]}>{item.title}</p>
				{/* <p className={styles["item__city"]}>{item.seller_address.city.name}</p> */}
			</div>
		</Link>
	);
};

export default ItemResult;
