import React from 'react'

export const SearchBox = (props) => {
  const { placeHolder, onChange } = props;
  return (
    <input type='search' placeholder={placeHolder} onChange={onChange} />

  )
}
