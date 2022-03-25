import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = (e) => {
    props.onPriceInputChange(e.target.name, parseInt(e.target.value));
  }

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        onChange={onPriceInputChange}
        placeholder="Price from..."
        value={props.priceFrom}
        />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        onChange={onPriceInputChange}
        name="priceTo"
        placeholder="Price to..."
        value={props.priceTo}
        />
    </div>
  )
}
