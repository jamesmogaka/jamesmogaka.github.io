import type { RouteStop } from "#/data/stream";

export function Route({ stops, label }: { stops: RouteStop[]; label: string }) {
	return (
		<div className="routebox">
			<div className="route" role="img" aria-label={label}>
				{stops.map((s) => (
					<span key={s.label} className={s.key ? "stop stop-key" : "stop"}>
						<i />
						<b>{s.label}</b>
					</span>
				))}
			</div>
		</div>
	);
}
