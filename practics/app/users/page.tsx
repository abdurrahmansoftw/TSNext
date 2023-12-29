import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default UsersPage
