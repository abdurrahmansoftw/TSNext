'use client'
import AdbIcon from '@mui/icons-material/Adb'
import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from '@mui/material'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

const NavBar = () => {
	const { status, data: session } = useSession()
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h6'
						component={Link}
						href={'/'}
						sx={{ flexGrow: 1 }}
					>
						AKAID
					</Typography>

					{status === 'loading' && <p>Loading...</p>}

					{status === 'authenticated' && (
						<Box>
							{session.user!.name}
							<Button color='inherit' component={Link} href='/api/auth/signout'>
								Logout
							</Button>
						</Box>
					)}

					{status === 'unauthenticated' && (
						<Button color='inherit' component={Link} href='/api/auth/signin'>
							Login
						</Button>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default NavBar
