import { Link as RouterLink } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Link } from "#/data/stream";

// Internal paths go through the router so the deploy base path is applied; http(s) opens in a new tab.
export function A({
	link,
	className,
	children,
}: {
	link: Link;
	className?: string;
	children?: ReactNode;
}) {
	const text = children ?? link.label;
	if (link.href.startsWith("/"))
		return (
			<RouterLink to={link.href} className={className}>
				{text}
			</RouterLink>
		);
	const external = link.href.startsWith("http") && !link.download;
	return (
		<a
			className={className}
			href={link.href}
			download={link.download}
			{...(external && { target: "_blank", rel: "noopener" })}
		>
			{text}
		</a>
	);
}
