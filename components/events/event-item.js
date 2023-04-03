import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from '../../styles/list-item.module.css';
import Button from '../ui/button';


const EventItem = (props) => {
    const { id, address, date, image, title } = props;

    const humanRedableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const link = '/events/' + id;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanRedableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{address}</address>
                </div>
                </div>
                <div className={classes.actions}>
                    <Button link={link}>
                    Explore Event
                    <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;