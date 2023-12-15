import { Unsplash } from "@/models/unsplash-images";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";
type PageProps = {
	params: { topic: string };
	// searchParams: { [key: string]: string | string[] | undefined };
	//search Params url=localhost300/topics/?(...) <- this after '?'
};
//SERVER SIDE RENDERING

export default async function Page({ params: { topic } }: PageProps) {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?query=${topic}&count=3&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
		{
			next: { revalidate: 15 },
		}
	);
	let images: Unsplash[] = await response.json();
	console.log("img", images.length);
	return (
		<div>
			{/* <Alert>This is </Alert> */}
			<h1>{topic}</h1>
			{images.map((img) => (
				<Image
					src={img.urls.raw}
					width={250}
					height={250}
					alt={img.description}
					key={img.urls.raw}
					className={styles.image}
				/>
			))}
		</div>
	);
}
