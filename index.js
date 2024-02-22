require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "KinshukK15",
    "id": 97669987,
    "node_id": "U_kgDOBdJTYw",
    "avatar_url": "https://avatars.githubusercontent.com/u/97669987?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/KinshukK15",
    "html_url": "https://github.com/KinshukK15",
    "followers_url": "https://api.github.com/users/KinshukK15/followers",
    "following_url": "https://api.github.com/users/KinshukK15/following{/other_user}",
    "gists_url": "https://api.github.com/users/KinshukK15/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/KinshukK15/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/KinshukK15/subscriptions",
    "organizations_url": "https://api.github.com/users/KinshukK15/orgs",
    "repos_url": "https://api.github.com/users/KinshukK15/repos",
    "events_url": "https://api.github.com/users/KinshukK15/events{/privacy}",
    "received_events_url": "https://api.github.com/users/KinshukK15/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 4,
    "following": 9,
    "created_at": "2022-01-13T10:31:12Z",
    "updated_at": "2024-02-20T18:11:25Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('kinshukishere')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})