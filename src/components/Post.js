import { useState } from "react";

export default function Post(props) {
    let [likeButton, setLikeButton] = useState(<ion-icon data-test="like-post" name="heart-outline" onClick={darLike}></ion-icon>);

    function darLike() {
        setLikeButton(<ion-icon data-test="like-post" name="heart-sharp" class="vermelho" onClick={removeLike}></ion-icon>);
        setNumCurtidas(props.curtidas + 1);
    };

    function removeLike() {
        setLikeButton(<ion-icon data-test="like-post" name="heart-outline" onClick={darLike}></ion-icon>);
        setNumCurtidas(props.curtidas);
    };

    let [numCurtidas, setNumCurtidas] = useState(props.curtidas);

    let [saveButton, setSaveButton] = useState(<ion-icon data-test="save-post" name="bookmark-outline" onClick={salvarPost}></ion-icon>);
    function salvarPost() {
        setSaveButton(<ion-icon data-test="save-post" name="bookmark-sharp" onClick={desfazSalvarPost}></ion-icon>);
    };

    function desfazSalvarPost() {
        setSaveButton(<ion-icon data-test="save-post" name="bookmark-outline" onClick={salvarPost}></ion-icon>);
    };

    let [animacao, setAnimacao] = useState(<ion-icon class="escondido" name="heart"></ion-icon>);

    function dbclick() {
        darLike();
        setAnimacao(<ion-icon class="dblike" name="heart"></ion-icon>);
        setInterval(() => { setAnimacao(<ion-icon class="escondido" name="heart"></ion-icon>); }, 300);
    }

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} alt={props.nomeUsuario} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img data-test="post-image" src={props.fotoPostada} onDoubleClick={dbclick} />
                {animacao}
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        {likeButton}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {saveButton}
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.imgCurtida} alt={props.nomeCurtida} />
                    <div data-test="likes-number" class="texto">
                        Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outros {numCurtidas.toLocaleString('pt-BR')} ninjas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}