'use client'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const NavBar = () => {
  const { status, data: session } = useSession()
  if (status === 'loading') return null

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' elevation={1} color='primary'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }} component={Link} href='/'>
            Home
          </Typography>
          
          <Button color='inherit' component={Link} href='/users'>
            Users
          </Button>

          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
