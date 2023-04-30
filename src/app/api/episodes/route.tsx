import { NextResponse } from 'next/server';

export async function GET() {
	const response = await fetch('https://finalspaceapi.com/api/v0/episode/');
	const data = await response.json();
	return NextResponse.json(data);
}

