import { useState } from "react";
import { Button } from "./Button";
import style from './Forms.module.css'
interface propsForm{
    options: string[]
}

export function Forms(props: propsForm) {
    
    return (
    <div className={style.formConter}>
        <span>
            <input type="text" id="text" />
            <label htmlFor="text">Nome</label>
        </span>
        <div className={style.telAndEmail}>
            <span>
                <input 
                type="tel" 
                id="tel" 
                placeholder="(21) 0000-0000"
                />
                <label htmlFor="tel">Tel</label>
            </span>
            <span>
                <input placeholder="email@email.com.br" type="text" id="email" />
                <label htmlFor="email">Email</label>
            </span>
        </div>
        <div className={style.dropAndArea}>
            <span>
                
                <select 
                    id="drop"
                >
                    <option value="" disabled selected>Escolha um assunto</option>
                    {
                        props.options.map((option) => (
                            <option value="">{option}</option>
                        ))
                    }
                </select>
                <label htmlFor="drop">Assunto</label>
            </span>
            <span>
                <textarea id="textArea" cols={30} rows={10}></textarea>
                <label htmlFor="textArea">Mensagem</label>
            </span>
        </div>
        <Button/>
    </div>
    );
  }