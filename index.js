function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`, 
            email: `${email}`
        }),
    })
    .then(resp => resp.json())
    .then(object => document.body.innerHTML = object['id'])
    .catch(e => document.body.innerHTML = e)
}


    