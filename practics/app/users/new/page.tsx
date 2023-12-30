'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
  const router = useRouter()

  return (
    <Button color='primary' variant='outlined' component={Link} href='/users/new' onClick={() => router.push('/users')}>
      Create New User
    </Button>
  )
}

export default NewUserPage
