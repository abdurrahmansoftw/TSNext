import { NextRequest } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

export async function POST(request: NextRequest) {
  const body = await request.json()

  schema.safeParse(body)
}
