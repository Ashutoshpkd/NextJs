import EventItem from "./event-item";
import classes from '../../styles/event-list.module.css';

const EventList = (props) => {
    const { events } = props;


    return (
        <ul className={classes.list}>
            {events.map(event => (
                <EventItem 
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    address={event.location}
                    image={event.image}
                />
            ))}
        </ul>
    )
}

export default EventList;