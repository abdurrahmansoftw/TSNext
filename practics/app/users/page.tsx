import UserTable from '../components/userTable'

const UsersPage = async () => {
  return (
    <>
      <h1>users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </>
  )
}

export default UsersPage
