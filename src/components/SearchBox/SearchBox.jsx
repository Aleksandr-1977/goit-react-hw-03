import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onFilter }) => {
  const id = { useId };

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={id}
        value={value}
        onChange={evt => onFilter(evt.target.value)}
      />
    </div>
  );
};
export default SearchBox;
