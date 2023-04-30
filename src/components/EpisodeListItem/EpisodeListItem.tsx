import { type EpisodeData } from 'src/app/api/episodes/route';
import styles from './EpisodeListItem.module.css';

type EpisodeListItemProps = {
	episode: EpisodeData[0];
};

export function EpisodeListItem(props: EpisodeListItemProps): JSX.Element {
	return (
		<article className={styles.episode}>
			<section>
				<img
					src={props.episode.image_url}
					alt=""
					className={styles.episodeImg}
					height={96}
					width={171}
					loading="lazy"
				/>
			</section>

			<section className={styles.info}>
				<h2 className={styles.heading}>{props.episode.name}</h2>
				<time>{props.episode.air_date}</time>
			</section>

			<section className={styles.characters}>
				{props.episode.characters.map((character) => (
					<img
						src={character.img_url}
						alt={character.name}
						title={character.name}
						key={character.id}
						className={styles.characterImg}
						height={40}
						width={40}
						loading="lazy"
					></img>
				))}
			</section>
		</article>
	);
}

