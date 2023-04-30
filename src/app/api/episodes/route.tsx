import { NextResponse } from 'next/server';

type Episode = {
	id: number;
	name: string;
	air_date: string;
	director: string;
	writer: string;
	characters: string[];
	img_url: string;
};

type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	gender: string;
	hair: string;
	origin: {};
	abilities: string[];
	alias: string[];
	img_url: string;
};

export type EpisodeData = ReturnType<typeof createEpisodeData>;

const EXTERNAL_API_URL = 'https://finalspaceapi.com/api/v0/';
const EPISODE_ENDPOINT = 'episode/';
const CHARACTER_ENDPOINT = 'character/';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const page = searchParams.get('page') ?? '1';

	const episodeResponse = await fetch(EXTERNAL_API_URL + EPISODE_ENDPOINT);
	const episodes = (await episodeResponse.json()) as Episode[];

	const characterResponse = await fetch(EXTERNAL_API_URL + CHARACTER_ENDPOINT);
	const characters = (await characterResponse.json()) as Character[];

	const paginatedEpisodes = createPaginatedData(episodes, +page, 10);
	const episodeData = createEpisodeData(paginatedEpisodes, characters);
	return NextResponse.json(episodeData);
}

function createPaginatedData(data: Episode[], pageNumber: number, pageSize: number) {
	const startIndex = (pageNumber - 1) * pageSize;
	const endIndex = pageNumber * pageSize;
	return data.slice(startIndex, endIndex);
}

function createEpisodeData(episodes: Episode[], characters: Character[]) {
	return episodes.map((episode) => {
		return {
			id: episode.id,
			name: episode.name,
			air_date: episode.air_date,
			image_url: episode.img_url,
			characters: episode.characters.map((character_url) =>
				getCharacterFromUrl(character_url, characters)
			),
		};
	});
}

function getCharacterFromUrl(characterUrl: string, characters: Character[]) {
	const id = +characterUrl.replace(EXTERNAL_API_URL + CHARACTER_ENDPOINT, '');
	const character = characters.find((character) => character.id === id);

	return {
		id,
		name: character?.name,
		img_url: character?.img_url,
	};
}

