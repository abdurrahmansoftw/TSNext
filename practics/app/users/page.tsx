import UserTable from '../components/UserTable'
import NewUserPage from './new/page'

interface Props {
	searchParams: { sortOder: string }
}

const UsersPage = async ({ searchParams: { sortOder } }: Props) => {
	return (
		<>
			<NewUserPage />
			<UserTable sortOder={sortOder} />
		</>
	)
}

export default UsersPage
