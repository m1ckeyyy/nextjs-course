import { Unsplash } from "@/models/unsplash-images";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
	title: "Static Fetching - NextJS 14 Image Galleria", //url hover title
};

export default async function staticPage() {
	const response = await fetch(
		"https://api.unsplash.com/photos/random?client_id=" +
			process.env.UNSPLASH_ACCESS_KEY
	);
	const image: Unsplash = await response.json();
	const width = Math.min(image.width, 500); //width 500px or smaller
	const height = (width / image.width) * image.height;

	// console.log(image);
	return (
		<div className="d-flex flex-column align-items-center">
			<Alert>
				This page <strong>fetches and caches data at build time. </strong>
				Even though the Unsplash API always returns a new image, we see t he
				same image after refreshing the page until we compile the project again
			</Alert>
			<Image
				src={image.urls.raw}
				width={width}
				height={height}
				alt={image.description}
				className="rounded shadow mw-100 h-100"
			/>
			by{" "}
			<Link href={"/users/" + image.user.username}>{image.user.username}</Link>
		</div>
	);
}
