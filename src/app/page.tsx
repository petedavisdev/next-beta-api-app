import { type EpisodeData } from './api/episodes/route';

export default async function Home() {
	const episodesResponse = await fetch(`http://localhost:3000/api/episodes`, {
		cache: 'force-cache',
	});
	const episodes = (await episodesResponse.json()) as EpisodeData;

	return (
		<div className="container">
			<main className="main">
				<ol>
					{episodes.map((episode) => (
						<li>
							{episode.name} - {episode.air_date}
						</li>
					))}
				</ol>
			</main>
		</div>
	);
}

