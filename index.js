require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000

const githubData ={
  "login": "afaq0000",
  "id": 213948402,
  "node_id": "U_kgDODMCX8g",
  "avatar_url": "https://avatars.githubusercontent.com/u/213948402?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/afaq0000",
  "html_url": "https://github.com/afaq0000",
  "followers_url": "https://api.github.com/users/afaq0000/followers",
  "following_url": "https://api.github.com/users/afaq0000/following{/other_user}",
  "gists_url": "https://api.github.com/users/afaq0000/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/afaq0000/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/afaq0000/subscriptions",
  "organizations_url": "https://api.github.com/users/afaq0000/orgs",
  "repos_url": "https://api.github.com/users/afaq0000/repos",
  "events_url": "https://api.github.com/users/afaq0000/events{/privacy}",
  "received_events_url": "https://api.github.com/users/afaq0000/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-05-29T10:16:36Z",
  "updated_at": "2025-07-20T21:08:26Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at the chai aur code</h1>')
})
app.get("/youtube",(req,res)=> {
    res.send('<h2>Chai aur Code</h2>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})


app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})
//  ssh window git hhub
// 100 