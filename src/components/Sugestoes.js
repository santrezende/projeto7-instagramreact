import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const sugestoesArray = [
        {
            imgSugestao: "assets/img/itachi.jpeg",
            userSugestao: "uchiha_itachi"
        },
        {
            imgSugestao: "assets/img/nagato.jpeg",
            userSugestao: "nagatex"
        },
        {
            imgSugestao: "assets/img/orochimaru.jpeg",
            userSugestao: "orochinho"
        },
        {
            imgSugestao: "assets/img/madara.jpeg",
            userSugestao: "uchihaGODD"
        },
        {
            imgSugestao: "assets/img/konan.jpeg",
            userSugestao: "papergoddess"
        },
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoesArray.map((s) => <Sugestao nomeSugestao={s.userSugestao} sugestaoImagem={s.imgSugestao} />)}
        </div>
    )
}