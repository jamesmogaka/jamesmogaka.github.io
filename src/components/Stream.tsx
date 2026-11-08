import { stream } from "#/data/stream";
import { StreamEntry } from "./StreamEntry";

export function Stream() {
	return (
		<section aria-labelledby="stream-h">
			<div className="stream-head">
				<h2 id="stream-h" className="mono">
					The stream
				</h2>
				<span className="mono faint">newest first ↓</span>
			</div>
			<div className="stream">
				<span className="spine" aria-hidden="true" />
				<span className="runner" aria-hidden="true" />
				{stream.map((e) => (
					<StreamEntry key={e.id} entry={e} />
				))}
			</div>
		</section>
	);
}
