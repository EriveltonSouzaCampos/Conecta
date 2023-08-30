import style from './Header.module.css'
import photoBackground from '../assets/foto_de_fundo.svg'
import { FacebookLogo } from 'phosphor-react';
import { InstagramLogo } from 'phosphor-react';
import { Soda } from './SodaPicture';

export function HeaderSite(){
    return(
        <div className={style.headerConter}>
            <img src={photoBackground} alt=""/>
            <header className={style.head}>
                <h1>CONECTA.</h1>
                <div className={style.socialMediaLogo}>
                    <a href="">
                        <FacebookLogo size={22}/>
                    </a>
                    <a href="">
                        <InstagramLogo size={22}/>
                    </a>
                </div>
            </header>
            <body className={style.bodySite}>
                <div className={style.contentTitle}>
                    <h1>Aqui um título de duas linhas</h1>
                    <button><a href="">Aqui um CTA</a></button>
                </div>
                <Soda/>
            </body>
        </div>
    )
}