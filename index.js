const contentContainerEl = document.getElementById('content-container-el')
const avatar = document.getElementsByClassName('avatar')
const heart = document.getElementsByClassName('heart')
const comment = document.getElementsByClassName('comment')
const dm = document.getElementsByClassName('dm')
const image = document.getElementsByClassName('image')
const infoContainer = document.getElementsByClassName('info-container')
const username = document.getElementsByClassName('username')


const posts = [
    {
        name: "Buta Ramen Japanese Restaurant",
        username: "butaramen5190",
        location: "Nova Scotia, Canada",
        image: "images/post-ButaRamen.png",
        avatar: "images/ButaRamenAvatar.png",
        headline: "Boiling from 10:30 to 10, everyday",
        likes: "1,100 likes",
        heart: "images/icon-heart.png",
        comment: "images/icon-comment.png",
        dm: "images/icon-dm.png"
    },
    {
        name: "Spice Hub Indian Kitchen",
        username: "spicehubsns",
        location: "Nova Scotia, Canada",
        image: "images/spicehubpost.png",
        avatar: "images/spicehubAvatar.png",
        headline: "Home of Best Food",
        likes: "1,700 likes",
        heart: "images/icon-heart.png",
        comment: "images/icon-comment.png",
        dm: "images/icon-dm.png"
    },
        {
        name: "Arirang Korean Restaurant",
        username: "arirangrestauranthfx",
        location: "Nova Scotia, Canada",
        image: "images/Arirang.png",
        avatar: "images/ArirangAvatar.png",
        headline: "Best Dine-in Bbq",
        likes: "424 likes",
        heart: "images/icon-heart.png",
        comment: "images/icon-comment.png",
        dm: "images/icon-dm.png"
    }
    
]


let postsHtml = ``

for (let post of posts) {
    postsHtml += `
    <div class="post content">
        <img class="avatar" src="${post.avatar}">
        
        <div class="info-container">
            <h1>${post.name}</h1>
            <h2>${post.location}</h2>
        </div>
        <img class="image" src="${post.image}">
        <img class="heart" src="${post.heart}">
        <img class="comment" src="${post.comment}">
        <img class="dm" src="${post.dm}">
        <p>${post.likes}</p>
        <p class="username">${post.username}</p>
        <span>${post.headline}</span>
        
    </div>
    `
    
}


contentContainerEl.innerHTML = postsHtml

