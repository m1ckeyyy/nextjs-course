import { Unsplash } from "@/models/unsplash-images";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
	title: "Dynamic Fetching - NextJS 14 Image Galleria", //url hover title
};
// export const revalidate = 0; //tells nextjs that this page shouldnt be Cached at all, same as below
// {
//     cache: "no-cache"
// } ITS BETTER BECAUSE YOU CAN DECIDE CACHING FOR EACH FETCH CALL

export default async function dynamicPage() {
	const response = await fetch(
		"https://api.unsplash.com/photos/random?client_id=" +
			process.env.UNSPLASH_ACCESS_KEY
		// {
		// 	cache: "no-cache",
		// }
	);
	const image: Unsplash = await response.json();
	const width = Math.min(image.width, 500); //width 500px or smaller
	const height = (width / image.width) * image.height;
	return (
		<div className="d-flex flex-column align-items-center">
			<Alert>Dynamic fetching, refresh to get a new image</Alert>
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
