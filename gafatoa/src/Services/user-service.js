export const userService = {
    login
};

const apiUrl = "https://localhost:7023";


function login(login) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login})
    };

    console.log(login)
    // return fetch(`${apiUrl}/Logins`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
}