import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "#/components/Intro";
import { Stream } from "#/components/Stream";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<Intro />
			<Stream />
		</>
	);
}
