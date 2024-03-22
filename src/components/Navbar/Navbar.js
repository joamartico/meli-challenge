import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
	return (
		<header className={styles["navbar"]}>
			<form action="/items">
				<Link href="/" className={styles["logoLink"]}>
					<img src="/Logo_ML@2x.png.png" alt="Mercado Libre logo" />
				</Link>

				<input
					type="text"
					placeholder="Nunca dejes de buscar"
					className={styles["searchbar"]}
					name="search"
					defaultValue={props.defaultValue}
					aria-label="Ingresa tu búsqueda"
				/>

				<button
					className={styles["searchbutton"]}
					type="submit"
					aria-label="Buscar"
				>
					<img src="/ic_Search@2x.png.png" alt="Search icon" />
				</button>
			</form>
		</header>
	);
};

export default Navbar;
