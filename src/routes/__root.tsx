import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Footer } from "#/components/Footer";
import { SiteHeader } from "#/components/SiteHeader";
import { site } from "#/data/stream";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: site.name },
			{ name: "description", content: site.description },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/png", href: "/favicon.png" },
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon-dark.png",
				media: "(prefers-color-scheme: dark)",
			},
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<div className="st">
					<div className="wrap">
						<SiteHeader />
						<main>{children}</main>
						<Footer />
					</div>
				</div>
				<Scripts />
			</body>
		</html>
	);
}
