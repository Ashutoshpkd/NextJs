import { useRouter } from "next/router"
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventDetails from "../../components/event-details/event-details";
import { getEventById } from "../../dummy-data";

const EventDetail = () => {
    const router = useRouter();
    const eventId =  router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <h1>No event with this ID</h1>
    }

    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics 
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                {event.description}
            </EventContent>
        </>
    )
}

export default EventDetail;