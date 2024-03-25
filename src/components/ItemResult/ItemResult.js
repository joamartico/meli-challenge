import Link from "next/link";
import styles from "./ItemResult.module.scss";

const ItemResult = ({ id, price, title, picture, free_shipping }) => {
	return (
		<Link href={`/items/${id}`} key={id} className={styles["item"]}>
			<img src={picture} alt={title} />

			<div className={styles["item__info"]}>
				<p className={styles["item__price"]}>
					$ {parseInt(price).toLocaleString("es-AR")}
					{free_shipping && (
						<img
							src="/ic_shipping@2x.png.png"
							alt="Envío gratis"
							className={styles["item__shipping"]}
						/>
					)}
				</p>
				<p className={styles["item__title"]}>{title}</p>
				{/* <p className={styles["item__city"]}>{item.seller_address.city.name}</p> */}
			</div>
		</Link>
	);
};

export default ItemResult;
