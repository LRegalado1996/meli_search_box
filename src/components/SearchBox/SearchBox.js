import React from 'react';
import './SearchBox.scss';
import search from '../../assets/images/search.svg';

const PLACEHOLDER_INPUT = "Nunca dejes de buscar";

const SearchBox = ({
  selected,
  getSelected,
  onClickEvent
}) => {
  return (
    <div className={"SearchBox"}>

      <input 
        type="text" 
        id="searchItem" 
        name="searchItem"
        placeholder={PLACEHOLDER_INPUT}
        value={selected}
        onChange={(e) => getSelected(e.target.value)}
        tabIndex={1}
        selected
      />

      <button 
        type="submit"
        tabIndex={2}
        onClick={() => onClickEvent()}
      >
        <img src={ search } alt="Search logo" />
      </button>

    </div>
  );
}
export { SearchBox };