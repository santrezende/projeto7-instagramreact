import Story from "./Story"

export default function Stories() {
    const storiesArray = [
        {
            user: "erosennin",
            img: "assets/img/jiraya.jpeg"
        },
        {
            user: "HyuugaShyGirl",
            img: "assets/img/hinata.jpeg"
        },
        {
            user: "hyuuganeji",
            img: "assets/img/neji.jpeg"
        },
        {
            user: "s2sakura",
            img: "assets/img/sakura.jpeg"
        },
        {
            user: "TIPSunade",
            img: "assets/img/tsunade.jpeg"
        },
        {
            user: "s4dsasuk3",
            img: "assets/img/sasuke.jpeg"
        },
        {
            user: "ROCKLEE",
            img: "assets/img/lee.jpeg"
        },
        {
            user: "shikamarijuana",
            img: "assets/img/shikamaru.jpeg"
        },
    ]

    return (
        <div class="stories">
            {storiesArray.map((s) => <Story img={s.img} user={s.user} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}