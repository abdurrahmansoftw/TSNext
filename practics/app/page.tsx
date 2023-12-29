import Link from 'next/link'
import ProductCard from './components/ProductCard'

const page = () => {
  return (
    <div>
      <Link href='/users'>users</Link>
      <ProductCard />
    </div>
  )
}

export default page
