import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'

export default function EventDetailPage() {
  const router = useRouter()
  console.log(router.query)
  const { eventId } = router.query
  return (
    <section>
      {getEventById(eventId) //
        .map(({ id, title, date, location }) => (
          <section key={`detail-${id}`}>
            <h2>{title}</h2>
            <time>{date}</time>
            <address>in {location}</address>
          </section>
        ))}
    </section>
  )
}
