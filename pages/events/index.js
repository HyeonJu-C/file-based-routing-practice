import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventFilterForm from '../../components/events/event-filter-form'
import { useRouter } from 'next/router'

export default function Events() {
  const router = useRouter()
  const eventList = getAllEvents()
  const handleSearch = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <>
      <EventFilterForm handleSearch={handleSearch} />
      <EventList eventlist={eventList} />
    </>
  )
}
