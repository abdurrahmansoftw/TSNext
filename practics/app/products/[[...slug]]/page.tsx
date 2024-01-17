interface Props {
	params: { slug: string[] }
	searchParams: { sortOder: string }
}

const ProductPage = ({
	params: { slug },
	searchParams: { sortOder },
}: Props) => {
	return (
		<div>
			ProductPage {slug} : {sortOder}
		</div>
	)
}

export default ProductPage
