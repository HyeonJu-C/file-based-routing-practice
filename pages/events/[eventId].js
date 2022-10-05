import { useRouter } from 'next/router'
import { events } from '../index'

export default function EventDetailPage() {
  const router = useRouter()
  const { eventId } = router.query
  return (
    <section>
      {events
        .filter(({ id }) => id === +eventId)
        .map(({ id, title, date, place }) => (
          <section key={`detail-${id}`}>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>in {place}</p>
          </section>
        ))}
    </section>
  )
}
