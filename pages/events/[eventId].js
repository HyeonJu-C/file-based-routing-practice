import { useRouter } from 'next/router'
import EventItem from '../../components/events/event-item'
import { getEventById } from '../../dummy-data'

export default function EventDetailPage() {
  const router = useRouter()
  const { eventId } = router.query
  const [eventItem] = getEventById(eventId)
  if (!eventItem) return <p>no match!</p>

  return <EventItem eventItem={eventItem} />
}
