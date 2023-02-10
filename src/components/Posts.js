import Post from "./Post"

export default function Posts() {
    const postsArray = [
        {
            imgUser: "assets/img/naruto.jpeg",
            userName: "narutin",
            post: "assets/img/naruto-post.jpeg",
            likeName: "HyuugaShyGirl",
            imgLike: "assets/img/hinata.jpeg",
            likes: 101523
        },
        {
            imgUser: "assets/img/gaara.jpeg",
            userName: "redsandman",
            post: "assets/img/gaara-post.jpeg",
            likeName: "s4dsasuk3",
            imgLike: "assets/img/sasuke.jpeg",
            likes: 62813
        },
        {
            imgUser: "assets/img/kakashi.jpeg",
            userName: "kakashi-sensei",
            post: "assets/img/kakashi-post.jpeg",
            likeName: "TIPSunade",
            imgLike: "assets/img/tsunade.jpeg",
            likes: 34197
        }
    ]

    return (
        <div class="posts">
            {postsArray.map((p) => <Post imgUsuario={p.imgUser} nomeUsuario={p.userName} fotoPostada={p.post} nomeCurtida={p.likeName} imgCurtida={p.imgLike} curtidas={p.likes} />)}
        </div>
    )
}