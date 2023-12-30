'use client'

import { Button } from '@mui/material'

interface Props {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
  console.error('Error', error)
  return (
    <div>
      <p>An error occurred while trying to render the page.</p>
      <Button onClick={() => reset()}> Retry</Button>
    </div>
  )
}

export default ErrorPage
