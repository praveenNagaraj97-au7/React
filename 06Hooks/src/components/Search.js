import React, { useState, useEffect } from "react";
import axios from "axios";
import { Markup } from "interweave";

import "./styles/search.css";

export const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [result, setResults] = useState([]);

  useEffect(() => {
    const getResponseFromWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          format: "json",
          action: "query",
          list: "search",
          origin: "*",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (!term) setResults([]);

    const searchTimeId = setTimeout(() => {
      if (term) {
        getResponseFromWiki();
      }
    }, 500);

    //return runs on every render clearing the time interval
    // Which will set time again
    return () => clearTimeout(searchTimeId);
  }, [term]);

  const renderResults = result.map(({ pageid, snippet, title }) => {
    return (
      <div key={pageid} className='search-result-item'>
        <h3 className='search-result-item__title'>{title}</h3>
        <Markup content={snippet} />
        <a
          className='search-result-item__link'
          href={`https://en.wikipedia.org?curid=${pageid}`}
        >
          View On Wiki
        </a>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className='search'>
        <input
          onChange={(ev) => setTerm(ev.target.value)}
          className='search-input'
          type='text'
          value={term}
          placeholder='Enter Something To Search'
        ></input>
      </div>

      <div className='search-results'>{renderResults}</div>
    </React.Fragment>
  );
};

export default SearchBar;
