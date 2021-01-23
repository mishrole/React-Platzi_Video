import React from 'react';
import '../assets/styles/components/Search.scss';

const MAIN_TITLE_TEXT = `¿Qué quieres ver hoy?`;
const MAIN_INPUT_PLACEHOLDER = `Buscar...`;

const Search = () => (
    <section className="main">
    <h2 className="main__title">{MAIN_TITLE_TEXT}</h2>
    <input type="text" className="input" placeholder={MAIN_INPUT_PLACEHOLDER} />
  </section>
);

export default Search;