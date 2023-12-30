import UserTable from '../components/UserTable'

interface Props {
  searchParams: { sortOder: string }
}

const UsersPage = async ({ searchParams: { sortOder } }: Props) => {
  console.log(sortOder)

  return (
    <>
      <UserTable sortOder={sortOder} />
    </>
  )
}

export default UsersPage
