import tokenService from './tokenService'
// const BASE_URL = 'https://daybydiary.herokuapp.com'
const BASE_URL = 'http://localhost:3001'


function signup(user) {
    console.log(user)
    return fetch(`/api/users/signup`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        console.log(res)
        throw new Error('Email already taken')
    })
    .then( ({token}) => tokenService.setToken(token))
}

function login(credentials){
    return fetch(`/api/users/login`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Username or password incorrect!')
    })
    .then( ({token}) => tokenService.setToken(token))
}


function getUser() {
    return tokenService.getUserFromToken();
}
  
function logout() {
    tokenService.removeToken();
  }


export default {
    signup,
    getUser,
    login,
    logout
}