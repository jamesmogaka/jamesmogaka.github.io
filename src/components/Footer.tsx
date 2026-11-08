import { site } from "#/data/stream";
import { A } from "./A";

export function Footer() {
	return (
		<footer className="site-footer">
			<p className="disp">
				That's the stream so far.{" "}
				<a className="add" href={`mailto:${site.email}`}>
					Add to it?
				</a>
			</p>
			<div className="mono foot-meta">
				<span>{site.email}</span>
				<A link={site.cv} className="plain" />
				<span>© 2026 {site.name}</span>
			</div>
		</footer>
	);
}
