import { Suspense } from 'react'
import UserTable from '../components/UserTable'
import NewUserPage from './new/page'

interface Props {
  searchParams: { sortOder: string }
}

const UsersPage = async ({ searchParams: { sortOder } }: Props) => {
  return (
    <>
      <NewUserPage />
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }>
        <UserTable sortOder={sortOder} />
      </Suspense>
    </>
  )
}

export default UsersPage
