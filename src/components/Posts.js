import Post from "./Post"

export default function Posts() {
    const postsArray = [
        {
            imgUser: "assets/img/meowed.svg",
            userName: "meowed",
            post: "assets/img/gato-telefone.svg",
            likeName: "respondeai",
            imgLike: "assets/img/respondeai.svg",
            likes: "101.523"
        },
        {
            imgUser: "assets/img/barked.svg",
            userName: "barked",
            post: "assets/img/dog.svg",
            likeName: "adorable_animals",
            imgLike: "assets/img/adorable_animals.svg",
            likes: "62.813"
        }
    ]

    return (
        <div class="posts">
            {postsArray.map((p) => <Post imgUsuario={p.imgUser} nomeUsuario={p.userName} fotoPostada={p.post} nomeCurtida={p.likeName} imgCurtida={p.imgLike} curtidas={p.likes} />)}
        </div>
    )
}