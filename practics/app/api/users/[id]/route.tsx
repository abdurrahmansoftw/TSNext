import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 404 })
  }

  return NextResponse.json({ id: 1, name: 'John Doe' })
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json()

  if (!body.name) {
    return NextResponse.json({ error: 'Name is Required' }, { status: 400 })
  }

  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 })
}
