import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const sugestoesArray = [
        { imgSugestao: "assets/img/bad.vibes.memes.svg", userSugestao: "bad.vibes.memes" },
        { imgSugestao: "assets/img/chibirdart.svg", userSugestao: "chibirdart" },
        { imgSugestao: "assets/img/razoesparaacreditar.svg", userSugestao: "razoesparaacreditar" },
        { imgSugestao: "assets/img/adorable_animals.svg", userSugestao: "adorable_animals" },
        { imgSugestao: "assets/img/smallcutecats.svg", userSugestao: "smallcutecats" },
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