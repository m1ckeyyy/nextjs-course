// "use client";
// import { useEffect } from "react";

export default async function WelcomingPage() {
	// console.log("whot");
	await new Promise((res) => setTimeout(res, 1));
	if (Date.now() % 2 == 0) {
		// throw Error("aa");
	}
	// fetch("https://api.unsplash.com/photos/random");
	return <div className="text-3xl">Hello next js 14</div>;
}
