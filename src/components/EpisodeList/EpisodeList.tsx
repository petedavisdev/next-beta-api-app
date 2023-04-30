import { type EpisodeData } from 'src/app/api/episodes/route';
import { EpisodeListItem } from '../EpisodeListItem/EpisodeListItem';
import styles from './EpisodeList.module.css';

type EpisodeListProps = {
	episodes: EpisodeData;
	page: number;
};

export function EpisodeList(props: EpisodeListProps): JSX.Element {
	return (
		<>
			{props.episodes.map((episode) => (
				<EpisodeListItem episode={episode} key={episode.id} />
			))}

			<footer className={styles.pagination}>
				{props.page > 1 ? (
					<a href={`?page=${props.page - 1}`} className={styles.paginationLink}>
						&larr; Previous
					</a>
				) : (
					<span className={styles.paginationDisabled}>&larr; Previous</span>
				)}

				<a href={`?page=${props.page + 1}`} className={styles.paginationLink}>
					Next &rarr;
				</a>
			</footer>
		</>
	);
}

