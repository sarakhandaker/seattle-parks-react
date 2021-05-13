const API_ROOT = `https://seattle-parks-api.herokuapp.com`;
// const API_ROOT='http://localhost:3000'

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token()}`
  };
};

const login = data => {
    return fetch(`${API_ROOT}/api/v1/login`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
    })
        .then(r => r.json())
}

const signup = data => {
    return fetch(`${API_ROOT}/api/v1/users`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
    })
        .then(r => r.json())
}

const check_user = () => {
    return fetch(`${API_ROOT}/check_user`, {
        headers: headers()})
    .then(r => r.json())
}

const getUserProfile=()=>{
    return fetch(`${API_ROOT}/api/v1/profile`, {
        headers: headers()
    })
        .then(r => r.json())
}

const editUser=(data, id)=>{
   return fetch(`${API_ROOT}/api/v1/users/${id}`, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify(data)
    })
        .then(r => r.json())
}

const postVisit=data=>{
    return fetch(`${API_ROOT}/api/v1/visits`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
      })
        .then(r => r.json())
}

const editVisit=(data, id)=>{
  return fetch(`${API_ROOT}/api/v1/visits/${id}`, {
       method: 'PATCH',
       headers: headers(),
       body: JSON.stringify(data)
   })
       .then(r => r.json())
}

const deleteVisit=id=>{
  fetch(`${API_ROOT}/api/v1/visit/${id}`, {
      method: `DELETE`,
      headers: headers()
          })
}

const getParks=()=>{
    return fetch(`${API_ROOT}/api/v1/parks`,{headers: headers()})
        .then(r=>r.json())
}

const getSinglePark=id=>{
   return fetch(`${API_ROOT}/api/v1/parks/` + id, {
        method: "GET",
        headers: headers(),
      })
        .then(r => r.json())
}

const postSavedPark=data=>{
    return fetch(`${API_ROOT}/api/v1/saved_park`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
      })
}

const deleteSavedPark=id=>{
    fetch(`${API_ROOT}/api/v1/saved_park/${id}`, {
        method: `DELETE`,
        headers: headers()
            })
}

export const api = {
  auth: {
    login,
    signup,
    check_user,
    getUserProfile,
    editUser
  },
  parks: {
    deleteSavedPark,
    deleteVisit,
    getSinglePark,
    postVisit,
    editVisit,
    postSavedPark,
    getParks
  }
};