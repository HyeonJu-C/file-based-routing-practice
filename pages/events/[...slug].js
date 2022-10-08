import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import { getEventsByDate } from '../../dummy-data'
// FilterdEventsPage

export default function EventSlugPage() {
  const router = useRouter()
  const { slug } = router.query
  const [selectedYear, selectedMonth] = slug
  const eventList = getEventsByDate({
    month: selectedMonth,
    year: selectedYear,
  })

  return <EventList eventlist={eventList} />
}
