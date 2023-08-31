import style from './Products.module.css'
interface prodsProps{
    name: string;
    img: string;
    description: string;
} 

export function Prods(props: prodsProps){
    return(
        <div className={style.prodConter}>
            <img src={props.img} alt="Imagem do produto" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <a href=""><button type="button">Aqui um CTA</button></a>
        </div>
    )
}