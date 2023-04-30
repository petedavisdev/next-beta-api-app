import { EpisodeList } from 'src/components/EpisodeList/EpisodeList';
import { type EpisodeData } from './api/episodes/route';

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home(props: PageProps) {
	const page = props.searchParams.page ?? '1';

	const episodesResponse = await fetch(`http://localhost:3000/api/episodes?page=${page}`, {
		cache: 'force-cache',
	});
	const episodes = (await episodesResponse.json()) as EpisodeData;

	return (
		<div className="container">
			<main className="main">
				<EpisodeList episodes={episodes} page={+page} />
			</main>
		</div>
	);
}

