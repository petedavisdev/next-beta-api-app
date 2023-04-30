import Head from 'next/head';

export default async function Home() {
	const helloResponse = await fetch(`http://localhost:3000/api/hello`, { cache: 'force-cache' });
	const hello = await helloResponse.json();

	return (
		<div className="container">
			<Head>
				<title>Next beta api app</title>
				<meta name="description" content="Using Next 13 beta app and api routes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<h1 className="title">{hello} Next beta API app</h1>
			</main>
		</div>
	);
}

