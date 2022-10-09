import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import { getEventsByDate } from '../../dummy-data'
// FilterdEventsPage

export default function EventSlugPage() {
  const router = useRouter()
  const { slug } = router.query

  // first rendering
  if (!slug) return <p>loading...</p>

  // second rendering
  const [selectedYear, selectedMonth] = slug

  const eventList = getEventsByDate({
    month: selectedMonth,
    year: selectedYear,
  })

  // +) selectedYear, selectedMonth가 유효하지 않을 때 분기 처리
  // +) 값은 유효하지만 eventList의 length가 0일 때 분기 처리

  return <EventList eventlist={eventList} />
}
