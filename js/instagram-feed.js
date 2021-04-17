const accessToken = "IGQVJWdGo0cnJzLVBERFNURGFCY3JIZAlNZAak1aRWxpZAThweUgzeDMwSzRIMnpydTRWWThuMHo3U0FwSWlrWmdIWHJTcENCazdLNmVyT1ZAUbU95MU84Q182ZAC1tdHJJeDBRUmxETnUyNnVRSzA3Ty1kNwZDZD"


const fields = "id,media_type,media_url,timestamp,permalink"

const apiURL = "https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}"

const getPost = async () => {
    const posts = fetch(apiURL).then(res => res.json()).then().catch(error)


    try{
        
    }
    const res = await fetch(apiURL)
    const data = await res.json()
}

