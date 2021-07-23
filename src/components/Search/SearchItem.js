import { useDispatch} from 'react-redux';


function SearchItem({search}) {

    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch({
          type: 'POST_FAVORITE',
          payload: {
              name: search.id,
              url: search.images.fixed_height.url
          }
      })
    }     
    console.log('ausdbia',search.id);
  return (
    <div>
        <img src={search.images.fixed_height.url} />
        <button onClick={handleClick}>FAVORITE</button>
</div>
  )
  
  }

  export default SearchItem;
