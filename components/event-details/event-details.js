import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import classes from './event-details.module.css';

const EventDetails = (props) => {
    const { title, image, description, date, location } = props.event;
    const humanRedableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <div>
            <h1>{title}</h1>
            <div className={classes.card}>
                <img src={image} alt={title} className={classes.image}/>
                {/* <div className={classes.image}/> */}
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanRedableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{location}</address>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;