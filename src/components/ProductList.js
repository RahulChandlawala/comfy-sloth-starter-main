import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const { filter_products: products, grid_view } = useFilterContext();
	if (products.length < 1) {
		<h5 style={{ textTransform: "none" }}>
			Sorry , no product match your search
		</h5>;
	}
	if (!grid_view) {
		return <ListView products={products} />;
	}
	return <GridView products={products}>Products list</GridView>;
};

export default ProductList;
