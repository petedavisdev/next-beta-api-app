import { EpisodeData } from 'src/app/api/episodes/route';
import styles from './EpisodeList.module.css';

type EpisodeListProps = {
	episodes: EpisodeData;
	page: number;
};

export function EpisodeList(props: EpisodeListProps): JSX.Element {
	return (
		<section className={styles.EpisodeList}>
			<ol>
				{props.episodes.map((episode) => (
					<li>
						{episode.name} - {episode.air_date}
					</li>
				))}
			</ol>

			{props.page > 1 && <a href={`?page=${props.page - 1}`}>Previous</a>}

			<a href={`?page=${props.page + 1}`}>Next</a>
		</section>
	);
}

