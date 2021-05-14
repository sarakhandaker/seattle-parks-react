import {api} from '../services/api'

function fetchParks(page) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_PARKS_REQUEST' });
        api.parks.getParks(page)
        .then(parks => dispatch({ type: 'ADD_PARKS', parks: parks }));
    };
  }
function searchParks(searchParams) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_PARKS_REQUEST' });
        api.parks.searchParks(searchParams)
        .then(parks => dispatch({ type: 'ADD_PARKS', parks: parks }));
    };
  }

  export {fetchParks, searchParks}