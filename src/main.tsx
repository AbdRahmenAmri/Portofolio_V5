import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.jsx"
import "./index.css"
import 'aos/dist/aos.css';
import SEO from "@components/SEO.js";
import ABOUT_ME from "@DATA/about-me.js";
import DOMAIN from "@DATA/domain.js";


const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<HelmetProvider>
				<SEO title={"Software Engineer DevOps - AbdRahmen Amri"} description={ABOUT_ME.SeoDescription ? ABOUT_ME.seoDescription : ABOUT_ME.description} name={"AbdRahmen"} type={"portfolio"} keywords={`${ABOUT_ME.roles.join(',')},${ABOUT_ME.technologies.join(',')}`} image={`https://${DOMAIN.url}/meta.png`} url={`https://${DOMAIN.url}/meta.png`} />
				<App />
			</HelmetProvider>
		</React.StrictMode>
	);
} else {
	console.error("Failed to find the root element");
}
