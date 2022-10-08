import EventItem from './event-item'

export default function EventList({ eventlist }) {
  return (
    <ul>
      {eventlist.map((item) => (
        <EventItem key={`event-list-${item.id}`} eventItem={item} />
      ))}
    </ul>
  )
}
