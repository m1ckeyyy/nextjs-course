"use client";

import { Button } from "react-bootstrap";

type ErrorPageProps = {
	error: Error;
	reset: () => void;
};
export default function ErrorPage({ error, reset }: ErrorPageProps) {
	return (
		<>
			<h1>Bad news</h1>
			<h4>An error occurred 😵</h4>
			<Button onClick={reset} variant="primary" active>
				Refresh
			</Button>
		</>
	);
}
