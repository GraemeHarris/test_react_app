import React from 'react'

export const ProductList = (props) => {

  // const products = props.products.map((prod) =>
  //   <tr>
  //     {
  //       Object.entries(props.columns).map((entry) =>
  //         entry[1] && (
  //         <td>
  //           {prod[entry[0]]}
  //         </td>
  //         )
  //       )
  //     }
  //   </tr>
  // );

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {
              Object.entries(props.columns).map((entry) =>
                entry[1] && (
                  <td key={entry}>
                    {[entry[0]]}
                  </td>
                )
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            props.products.map((prod) =>
              <tr key={prod.name}>
                {
                  Object.entries(props.columns).map((entry) =>
                    entry[1] && (
                    <td key={entry}>
                      {prod[entry[0]]}
                    </td>
                    )
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
