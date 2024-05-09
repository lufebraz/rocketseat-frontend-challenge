import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartIcon } from "./icons/cart-icon"
import styled from "styled-components";

const CartCount = styled.span`
    border-radius: 100%;
    padding: 0 4px;
    font-size: 11px;
    background-color: var(--red-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items');    

    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount> }
        </Container>
    )
}