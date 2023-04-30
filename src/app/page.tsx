export default async function Home() {
	const helloResponse = await fetch(`http://localhost:3000/api/hello`, { cache: 'force-cache' });
	const hello = await helloResponse.json();

	return (
		<div className="container">
			<main className="main">
				<h1 className="title">{hello} Next beta API app</h1>
			</main>
		</div>
	);
}

