import { useState } from "react";

export default function Usuario(props) {
    const [nome, setNome] = useState(props.user);
    const [img, setImg] = useState(props.img);

    return (
        <div class="usuario">
            <img data-test="profile-image" src={img} alt="imagem de perfil" onClick={() => {
                let newImage = prompt("Insira o link para sua foto de perfil");
                (!newImage) ? newImage = "" : setImg(newImage);
            }} />
            <div data-test="name" class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={() => {
                        let newUser = prompt("Qual o seu nome?");
                        (!newUser) ? newUser = "" : setNome(newUser);
                    }} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}