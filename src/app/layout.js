import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mercado Libre Argentina - Envíos Gratis en el día",
	description:
		"Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
};

export default function RootLayout(props) {
	console.log("RootLayout", props);
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>{props.children}</main>
			</body>
		</html>
	);
}
