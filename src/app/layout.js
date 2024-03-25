import "./globals.css";

export const metadata = {
	title: "Mercado Libre Argentina - Envíos Gratis en el día",
	description:
		"Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
};

export default function RootLayout(props) {
	return (
		<html lang="en">
			<body>
				<link
					href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg"
					rel="icon"
					data-head-react="true"
				/>
				<main>{props.children}</main>
			</body>
		</html>
	);
}
