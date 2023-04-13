import classes from './button.module.css';
import { useRouter } from 'next/router';

const Button = (props) => {
    const router = useRouter();

    const handleClick = (e) => {
        router.push(props.link)
    }
    return (
        <button className={classes.btn} onClick={handleClick}>
            {props.children}
        </button>
    )
}

export  default Button;
