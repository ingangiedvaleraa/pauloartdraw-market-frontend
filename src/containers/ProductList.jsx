import React from 'react';
import ProductItem from '@components/ProductItem';
import Loading from '@components/Loading';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const ProductList = () => {
	const result = useGetProducts();
	if(result.isLoading) {
		return (
			<Loading/>
		);
	} else {
		return (
			<section className="main-container">
				<div className="ProductList">
					{result.products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			</section>
		);
	}
}

export default ProductList;