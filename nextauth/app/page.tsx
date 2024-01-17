import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const page = async () => {
	const session = await getServerSession(authOptions)
	return (
		<div>
			<h1>User : {session && session.user!.name}</h1>
		</div>
	)
}

export default page
