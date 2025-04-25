import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

import { Resume } from '../components/Resume';
import { RESUME } from '../components/Resume/consts';

export default function Home() {
	return (
		<Layout title="Resume" description={RESUME.title}>
			<Head>
				<meta property="og:url" content="https://zemil.ru" />
				<meta property="og:image" content="https://zemil.ru/img/emil.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="zemil.ru" />
			</Head>

			<main>
				<Resume />
			</main>
		</Layout>
	);
}
