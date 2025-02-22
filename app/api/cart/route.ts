import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const userId = 1;
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ items: [] });
    }

    const userCart = await prisma.cart.findFirst({ where: { OR: [{}, {}] } });

    return NextResponse.json({ items: [] });
  } catch (error) {
    console.log(error);
  }
}
