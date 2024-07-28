import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./searchbox.module.css";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.filterWrap}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterField}
        type="text"
        name="filter"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
