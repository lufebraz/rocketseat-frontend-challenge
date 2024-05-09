import styled from "styled-components";
import {formatPrice} from "@/utils.format-price";

interface ProductsCardProps {
    image: string,
    title: string,
    price: number
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    
    width: 256px;
    
    img {
        width: 256px;
        height: 300px;
        border-radius: 4px 4px 0 0;
    }
    
    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-darker);
    }
    
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
    }
    
    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;
        
        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0;
            background: var(--shapes);
        }
    }
`

export function ProductsCard(props: ProductsCardProps) {

    const formatedPrice = formatPrice(props.price);

    return(
        <Card>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div/>
                <p>{formatedPrice}</p>
            </div>
        </Card>
    )
}