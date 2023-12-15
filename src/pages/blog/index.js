import Image from "next/image"
import fs from 'fs'
import path from 'path'
import Header from "../../app/components/Header"
import Footer from "../../app/components/Footer"
export default function BlogPostArchive({ data }) {
	const blogIndex = data.posts

	return (
		<>
			<Header />
			<main className="bg-white">
				<div className="heading-container pt-[10rem] bg-white">
					<h1 className="text-5xl text-center w-full max-w-sm mx-auto mb-4 pb-4 border-b-2 border-b-black">Blog</h1>
					<h2 className="text-md text-center w-full">Learn something extraordinary!</h2>
				</div>
				<div className="articles-container max-w-[850px] mx-auto p-12">
					{blogIndex.map(({
						title,
						slug,
						imgUrl,
						excerpt,
						isoDate,
						niceDate
					}) =>
						<article className="w-4/5" key={slug}>
							<a href={`https://ordinaryagency.com.au/blog/${slug}`}>
								<figure>
									<Image
										src={imgUrl}
										alt={title}
										width={300}
										height={225}
									/>
								</figure>
								<h3>{title}</h3>
								<time dateTime={isoDate}>{niceDate}</time>
								{excerpt && <p>{excerpt}</p>}
							</a>
						</article>

					)}
				</div>
			</main>
			<Footer />
		</>
	)
};
export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'src', 'data', 'blog', 'allPostsMeta.json');
	const jsonData = fs.readFileSync(filePath, 'utf8');
	const data = JSON.parse(jsonData);
	return {
		props: {
			data
		}
	};
}