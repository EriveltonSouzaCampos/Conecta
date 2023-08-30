import style from './Header.module.css'
import { FacebookLogo } from 'phosphor-react';
import { InstagramLogo } from 'phosphor-react';
import { Soda } from './SodaPicture';

export function HeaderSite(){
    return(
        <div className={style.headerConter}>
            <header className={style.head}>
                <h1>CONECTA.</h1>
                <div className={style.socialMediaLogo}>
                    <FacebookLogo/>
                    <InstagramLogo/>
                </div>
            </header>
            <body className={style.bodySite}>
                
            </body>
        </div>
    )
}