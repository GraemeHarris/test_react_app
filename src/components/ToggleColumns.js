import React from 'react'

const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    props.onCheckboxClick(e.target.name, e.target.checked);
  }

  return (
    <div className="toggle-columns">
      {
        Object.keys(props.columns).map((column, index) => {
          return (
          <div key={index}>
            <label htmlFor={column}>
              {column}
            </label>
            <input
              checked={props.columns[column]}
              onChange={onCheckboxClick}
              id={column}
              name={column}
              type="checkbox" />
          </div>)
        })
      }
    </div>
  );

}

export { ToggleColumns};