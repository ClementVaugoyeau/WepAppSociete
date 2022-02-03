export const userService = {
    login
};

const apiUrl = "https://localhost:7023";


function login(login) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "pseudo": "Van",
            "password": "baba"
            })
    };

    console.log(login)
    fetch(`${apiUrl}/Logins/login`, requestOptions)
    .then(res => res.text())
        .then(res => {
            console.log(res)
            localStorage.setItem('user', res)
        });
        // .then(user => {
        //     console.log(user.text())
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('user', JSON.stringify(user));

        //     return user;
        // });
}