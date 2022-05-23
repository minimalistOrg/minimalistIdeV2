import { useSelector } from "react-redux";
import "./FuzzySearch.css";
import {ReactSearchAutocomplete} from "react-search-autocomplete"

function FuzzySearch() {

  const listFn = useSelector((state: any) => state.addbubble.value);

console.log(listFn)

let items = listFn



const handleOnSearch = (string:any, results:any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result:any) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item:any) => {
    // the item selected
    // console.log(item)
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item:any) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>fn: {item.name}</span>
      </>
    )
  }

  return (
    <div className="FuzzySearch__input">
      <ReactSearchAutocomplete
        placeholder="Search functions by name"
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}

export default FuzzySearch;
