import React, { useState, useEffect } from 'react';
import './SearchBox.scss';
import search from '../../assets/images/search.svg';
import history from "../../services/history";

const PLACEHOLDER_INPUT = "Nunca dejes de buscar";

const SearchBox = ({
  selected
}) => {
  const [inputValue, updateInputValue] = useState('');

  useEffect(() => {
    if (selected) updateInputValue(selected)
  }, [selected] );

  return (
    <div className={"SearchBox"}>

      <input 
        type="text" 
        id="searchItem" 
        name="searchItem"
        placeholder={PLACEHOLDER_INPUT}
        value={inputValue}
        onChange={(e) => updateInputValue(e.target.value)}
        tabIndex={1}
        selected
      />

      <button 
        type="submit"
        tabIndex={2}
        onClick={() => history.push({ pathname : '/items', search :'?search=' + inputValue, itemId : null }) }
        disabled={!inputValue}
      >
        <img src={ search } alt="Search logo" />
      </button>

    </div>
  );
}
export { SearchBox };