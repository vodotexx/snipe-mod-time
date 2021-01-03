fetch('https://auth.roblox.com/v1/authentication-ticket', {method: 'POST'})
    .then(res => {return res.json()})
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
