import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numOfCartItems = cartCtx.items.reduce(
        (currNum, item) => currNum + item.amount,
        0
    );

    return (
        <button
            className={styles.button}
            onClick={props.onShowCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;