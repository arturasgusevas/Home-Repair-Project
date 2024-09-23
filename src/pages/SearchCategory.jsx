import {useParams} from 'react-router-dom';

function SearchCategory() {
  const {category} = useParams();

  return <h1>Search Result for {category}</h1>;
}

export default SearchCategory;
