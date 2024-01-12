import PostLayout from "../../app/components/PostLayout"
import fs from 'fs'
import path from 'path'
export default function BlogPost01({ data }) {
	const postMeta = data.posts.filter(post => post.slug === "under-the-hood-1")
	return (
		<PostLayout meta={postMeta[0]} >
			<h2 className="text-xl md:text-2xl my-3">What's it matter?</h2>
			<p className="text-lg max-w-[75ch]">
				In today's fast-paced digital world, the reliability and performance of a website are crucial for maintaining a competitive edge. A website that is poorly made, slow, or prone to breaking within a few years can significantly hinder a business's growth and customer satisfaction. Such websites, often referred to as 'lemons,' can drain resources, reduce user engagement, and ultimately lead to lost revenue. Understanding how to spot these digital lemons is key for entrepreneurs, business owners, and even casual internet users to avoid the pitfalls of investing in a subpar online presence.
			</p>
			<h2 className="text-xl md:text-2xl my-1">How Can I tell?</h2>
			<p className="text-lg max-w-[75ch]">
				Identifying a lemon website isn't always straightforward, as issues might not be apparent at first glance. However, there are telltale signs. A lemon website often has slow loading times, frequent downtime, and a design that feels outdated or unresponsive. You might also notice a lack of updates or support from the developers, indicating a lack of ongoing investment in the site's health. Poor SEO performance and low rankings on search engine results can also be indicators of underlying issues. Additionally, if a website is not optimized for mobile devices or lacks basic security features, it’s likely not built with longevity or user experience in mind. Recognizing these warning signs early can save you time and resources in the long run.
			</p>
			<h2 className="text-xl md:text-2xl my-1">Avoiding the Pitfalls</h2>
			<p className="text-lg max-w-[75ch]">
				When venturing into the online world, whether it's for setting up a personal blog, an e-commerce platform, or a digital portfolio, it's crucial to do your homework. Research the track record of the website developers or the platform you're planning to use. Look for reviews or testimonials from other users to gauge their experiences. Additionally, pay attention to the level of customer support offered. A reliable website should provide prompt and helpful assistance. Investing in a quality website may require more resources upfront, but it pays off in the long run through increased reliability, better user experience, and stronger online presence.
			</p>
		</PostLayout>
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