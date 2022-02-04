export const userService = {
    login
};

const apiUrl = "https://localhost:7023";


function login(login) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
    };

    console.log(login)
    return fetch(`${apiUrl}/Logins/login`, requestOptions)
    .then(res => res.text())
        .then(res => {
            if (res){
                localStorage.setItem('user', res)
                return res
            }
            
        });
}