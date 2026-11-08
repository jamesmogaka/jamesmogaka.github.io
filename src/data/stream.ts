export type Status = "next" | "now" | "past";

export interface RouteStop {
	label: string;
	key?: boolean; // filled green stop
}

export interface Link {
	label: string;
	href: string;
	download?: string;
}

export interface StreamEntry {
	id: string;
	gutter: string; // "Next" | "Now" | "2025" ...
	status: Status;
	featured?: boolean; // large green node with halo (Zync)
	title: string;
	titleLink?: Link; // linked text appended to the title ("AI engineer at <Seraa ai>")
	aside?: string; // small mono note after the title (Sokasasa)
	line: string; // one sentence
	route?: RouteStop[]; // mini route map
	routeLabel?: string; // aria-label for the route map
	figure?: { from: string; to: string; caption: string }; // the 40 → 95% figure
	meta: string[]; // mono meta items
	links?: Link[];
}

export const site = {
	name: "James Mogaka",
	email: "jamesoyondi23@gmail.com",
	description:
		"James Mogaka, AI engineer in Nairobi. Agents, queues and the backends between them.",
	contact: [
		{ label: "GitHub ↗", href: "https://github.com/jamesmogaka" },
		{
			label: "LinkedIn ↗",
			href: "https://www.linkedin.com/in/james-mogaka-056b42217",
		},
		{
			label: "Résumé ↓",
			href: "https://docs.google.com/document/d/1iScwCGTtqxrAGpZvH94nX34sIwxoOtsIijtjVvOw2Iw/export?format=pdf",
			download: "james-mogaka-resume.pdf",
		},
	] satisfies Link[],
	cv: {
		label: "Full CV ↓",
		href: "https://docs.google.com/document/d/1x1ZNl9qf6ZGEeZLT4lJ8sv9zaLHYqCMvIDDW0MPQnz4/export?format=pdf",
		download: "james-mogaka-cv.pdf",
	} satisfies Link,
};

// TODO: real repo URLs for Zync, WhatsApp Gateway, Sokasasa (placeholders point at the GitHub profile)
const REPO_PLACEHOLDER = "https://github.com/jamesmogaka";

export const stream: StreamEntry[] = [
	{
		id: "marketing-desk",
		gutter: "Next",
		status: "next",
		title: "An AI marketing desk",
		line: "One place for a company to plan its social media content and turn its audience into leads.",
		meta: ["Planned", "AI agents · social · leads"],
	},
	{
		id: "zync",
		gutter: "Now",
		status: "now",
		featured: true,
		title: "Zync",
		line: "A software factory that plans, estimates, tracks and builds software with Claude Code skills.",
		routeLabel:
			"Route: Claude Code skills, MCP server, GraphQL API, PostgreSQL, dashboard",
		route: [
			{ label: "skills", key: true },
			{ label: "MCP" },
			{ label: "GraphQL" },
			{ label: "Postgres" },
			{ label: "dashboard" },
		],
		meta: ["Building · 2026"],
		links: [
			{ label: "Case study ↗", href: "/projects/zync" },
			{ label: "[Repo link] ↗", href: REPO_PLACEHOLDER },
		],
	},
	{
		id: "gateway",
		gutter: "Now",
		status: "now",
		title: "WhatsApp Gateway",
		line: "My server, one text away. Instructions are queued, relayed to the right service, and answered in the same chat.",
		routeLabel: "Route: WhatsApp, Bull queue, Redis Stream, service, reply",
		route: [
			{ label: "WhatsApp" },
			{ label: "Bull", key: true },
			{ label: "Redis Stream" },
			{ label: "service" },
			{ label: "reply" },
		],
		meta: ["Building · 2026", "NestJS"],
		links: [{ label: "[Repo link] ↗", href: REPO_PLACEHOLDER }],
	},
	{
		id: "sokasasa",
		gutter: "Now",
		status: "now",
		title: "Sokasasa",
		aside: "soka, sasa: football, now",
		line: "Subscribe to a match and get the events you chose on WhatsApp as they happen. It runs on the gateway above.",
		routeLabel: "Route: match feed, Sokasasa, WhatsApp Gateway, your phone",
		route: [
			{ label: "match feed" },
			{ label: "Sokasasa", key: true },
			{ label: "gateway" },
			{ label: "your phone" },
		],
		meta: ["Building · 2026", "NestJS · Redis"],
		links: [{ label: "[Repo link] ↗", href: REPO_PLACEHOLDER }],
	},
	{
		id: "seraa",
		gutter: "2025",
		status: "past",
		title: "AI engineer at",
		titleLink: { label: "Seraa ai", href: "https://seraaai.co/" },
		figure: {
			from: "40",
			to: "95%",
			caption: "LLM output accuracy after I rebuilt our agent framework",
		},
		line: "Led the move from the Vercel AI SDK to Mastra, and freed up to 20% of the model's context with declarative tools.",
		meta: ["July 2025 – now · remote"],
	},
	{
		id: "mutall",
		gutter: "2023",
		status: "past",
		title: "Software engineer at Mutall Data CSR",
		line: "Database features for a rental CRM, and an internal MySQL diagramming tool for querying large databases.",
		meta: ["May 2023 – April 2025 · Kiserian"],
	},
	{
		id: "bsc",
		gutter: "2019",
		status: "past",
		title: "BSc Software Engineering",
		line: "Kirinyaga University, second class honours (upper division).",
		meta: ["2019 – 2023"],
	},
];
