import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const [productList, setProductList ] = useState(props.products);

  React.useEffect(() => {
    const filteredProducts = props.products.filter((product) => {
      // Check for truthiness but allow zero through to be checked
      if ((price.priceFrom || price.priceFrom===0) && (price.priceTo || price.priceTo===0)) {
        if ((price.priceTo===price.priceFrom)) {
          return (product.price===price.priceTo && product.price===price.priceFrom)
        }
        return ((product.price > price.priceFrom) && (product.price < price.priceTo))
      } else if (price.priceFrom) {
        return (product.price > price.priceFrom)
      } else if (price.priceTo){
        return (product.price < price.priceTo)
      } else {
        return true;
      }
    });
    setProductList(filteredProducts);
  }, [price] );

  const onPriceInputChange = (name, value) => {
    setPrice({...price, [name]: value});
  }

  const onCheckboxClick = (name, checked) => {
    setColumns({...columns, [name]: checked});
  }

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={productList}
        columns={columns} />
    </div>
  );
}

export default Search;
