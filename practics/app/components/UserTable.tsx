'use client'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { sort } from 'fast-sort'
import Link from 'next/link'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

interface Props {
  sortOder: string
}

// eslint-disable-next-line @next/next/no-async-client-component
const UserTable = async ({ sortOder }: Props) => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  const sortedUsers = sort(users).asc(sortOder === 'email' ? (user) => user.email : (user) => user.name)

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>
              <Link href='/users?sortOder=name'>Name</Link>
            </StyledTableCell>
            <StyledTableCell>
              <Link href='/users?sortOder=email'>Email</Link>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component='th' scope='row'>
                {user.id}
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                {user.name}
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                {user.email}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserTable
