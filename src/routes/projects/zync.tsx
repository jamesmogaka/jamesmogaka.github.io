import { createFileRoute, Link } from "@tanstack/react-router";

// shortcut: placeholder until the Zync case study is written
export const Route = createFileRoute("/projects/zync")({
	head: () => ({ meta: [{ title: "Zync · James Mogaka" }] }),
	component: Zync,
});

function Zync() {
	return (
		<section aria-label="Zync case study" className="intro">
			<h1 className="disp">Zync</h1>
			<p>The case study is on its way.</p>
			<p className="mono">
				<Link to="/" hash="zync">
					← Back to the stream
				</Link>
			</p>
		</section>
	);
}
