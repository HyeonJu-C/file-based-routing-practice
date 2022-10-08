import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventFilterForm from '../../components/events/event-filter-form'

export default function Events() {
  const eventList = getAllEvents()

  return (
    <>
      <EventFilterForm />
      <EventList eventlist={eventList} />
    </>
  )
}
