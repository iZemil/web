import Layout from '@theme/Layout';
import React from 'react';

export default function Home() {
	return (
		<Layout title="My Products" description="Emil's product list">
			<head>
				<meta property="og:url" content="https://zemil.ru" />
				<meta property="og:image" content="https://zemil.ru/img/emil.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="zemil.ru" />
			</head>

			<main>
				<ul>
					<li>bllng.com</li>
					<li>job.js.org</li>
					<li>telegram bots</li>
					<li>NPM package</li>
					<li>react-aui</li>
				</ul>
			</main>
		</Layout>
	);
}
