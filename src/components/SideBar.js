import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario user="random_ninja" img="assets/img/random_ninja.jpeg" />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}