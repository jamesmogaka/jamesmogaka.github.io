import type { StreamEntry as Entry } from "#/data/stream";
import { A } from "./A";
import { Route } from "./Route";

const nodeClass = (e: Entry) =>
	e.featured ? "node node-key" : e.status === "now" ? "node node-on" : "node";

export function StreamEntry({ entry: e }: { entry: Entry }) {
	return (
		<article className="row" id={e.id}>
			<span className={e.featured ? "gut acc" : "gut"}>{e.gutter}</span>
			<span className={nodeClass(e)} aria-hidden="true" />
			<div className="body">
				<h3 className={e.status === "next" ? "ttl ttl-next" : "ttl"}>
					{e.title}
					{e.titleLink && (
						<>
							{" "}
							<A link={e.titleLink} />
						</>
					)}
					{e.aside && (
						<>
							{" "}
							<span className="mono aside">{e.aside}</span>
						</>
					)}
				</h3>
				{e.figure && (
					<div className="figrow">
						<span className="fig">
							{e.figure.from}
							<span className="faint">→</span>
							<span className="acc">{e.figure.to}</span>
						</span>
						<span className="mono figcap">{e.figure.caption}</span>
					</div>
				)}
				<p className="line">{e.line}</p>
				{e.route && <Route stops={e.route} label={e.routeLabel ?? ""} />}
				<div className="meta">
					{e.meta.map((m, i) => (
						<span key={m} className={e.featured && i === 0 ? "acc" : undefined}>
							{m}
						</span>
					))}
					{e.links?.map((l) => (
						<A key={l.label} link={l} className="plain" />
					))}
				</div>
			</div>
		</article>
	);
}
