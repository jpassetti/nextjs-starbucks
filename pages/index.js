// next.js components
import Head from 'next/head'

// custom components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

// styles


export default function Home({allPosts}) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<h1>Jeff Passetti</h1>
				<p>Web designer</p>
				<Button
					label="View menu"
					path="/menu"
					type="primary"
				/>
				<Button 
					label="View portfolio" 
					path="/portfolio"
					type="primary"
				/>
				<Button 
					label="About me" 
					path="/about"
					type="secondary"
				/>
			</section>
		</Layout>
	)
}
