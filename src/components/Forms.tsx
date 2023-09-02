import { Button } from "./Button";
import style from './Forms.module.css'

export function Forms() {
    const nothing = ' '
    return (
    <div className={style.formConter}>
        <span>
            <label htmlFor="text">Nome</label>
            <input type="text" id="text" />
        </span>
        <div className={style.telAndEmail}>
            <span>
                <label htmlFor="tel">Tel</label>
                <input type="tel" id="tel" />
            </span>
            <span>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
            </span>
        </div>
        <div className={style.dropAndArea}>
            <span>
                <label htmlFor="drop">Assunto</label>
                <select id="drop">
                    <option value="1">oi</option>
                    <option value="2">oie</option>
                    <option value="3">oiee</option>
                    <option value="4">oioioi</option>
                </select>
            </span>
            <span>
                <label htmlFor="textArea">Mensagem</label>
                <textarea id="textArea" cols={30} rows={10}></textarea>
            </span>
        </div>
        <Button/>
    </div>
    );
  }