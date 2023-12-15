import Head from 'next/head';
import Image from "next/image"
import Header from "./Header"
import Footer from "./Footer"

function PostLayout({meta, children}) {
  const {
    title,
    description,
    slug,
    isoDate,
    niceDate,
    author,
    imgPath
  } = meta
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": { title },
    "url": "https://ordinaryagency.com.au/" + slug,
    "image": [
      "https://ordinaryagency.com.au" + imgPath,
    ],
    "datePublished": isoDate + "T10:00:00.000",
    "dateModified": isoDate + "T10:00:00.000",
    "author": {
      "@type": "Person",
      "name": { author },
      "url": "https://ordinaryagency.com.au",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ordinary Agency",
      "url": "https://ordinaryagency.com.au",
      "sameAs": [
        "https://www.instagram.com/ordinaryagency/",
        "https://au.linkedin.com/company/ordinaryagencyseo",
      ],
      "logo": "https://example.com/logo.svg"
    }
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      </Head>
      <Header />
      <main className='py-12'>
      <article className='bg-white p-16 max-w-[850px] mx-auto'>
				<figure>
					<Image
						src={`/images${imgPath}`}
						alt=""
						width={800}
						height={600}
					/>
				</figure>
				<h1 className="text-2xl md:text-3xl my-4">{title}</h1>
				<time dateTime={isoDate}>{niceDate}</time>
				<address>
					Written by {author}
				</address>
        {children}
        <div className='return-container pt-12 bg-white'>
					<a href="/" className='block mx-auto max-w-[5rem] text-center py-2 border-black border-2 text-black'>
						Home
					</a>
				</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default PostLayout;
