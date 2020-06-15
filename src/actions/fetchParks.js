import {api} from '../services/api'

export function fetchParks() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_PARKS_REQUEST' });
        api.parks.getParks()
        .then(parks => dispatch({ type: 'ADD_PARKS', parks }));
    };
  }
