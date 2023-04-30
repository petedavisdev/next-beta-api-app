---
to: src/app/api/<%= h.changeCase.kebab(name) %>/route.tsx
---
import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json("<%= name %>");
}

export async function POST(request: Request) {
	return NextResponse.json(request);
}
