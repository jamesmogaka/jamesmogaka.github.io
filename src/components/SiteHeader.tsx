import { site } from "#/data/stream";
import { A } from "./A";

export function SiteHeader() {
	return (
		<header className="site-header">
			<span className="site-name">{site.name}</span>
			<nav aria-label="Contact" className="mono contact">
				<a className="plain" href={`mailto:${site.email}`}>
					Email
				</a>
				{site.contact.map((l) => (
					<A key={l.href} link={l} className="plain" />
				))}
			</nav>
		</header>
	);
}
