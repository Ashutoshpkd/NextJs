import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data"

const Events = () => {
    const featuredEvents = getFeaturedEvents();
    return <EventList events={featuredEvents}/>
}

export default Events;