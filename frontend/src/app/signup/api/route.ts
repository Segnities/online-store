
import { NextResponse } from 'next/server';
import { registration } from '@/http/userAPI';

export async function POST(req: Request) {
   return NextResponse.json({ name: 'John Doe' }, { status: 200 });
}