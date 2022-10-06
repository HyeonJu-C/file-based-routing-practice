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
            <h1>{title}</h1>
            <p>{date}</p>
            <p>in {location}</p>
          </section>
        ))}
    </section>
  )
}
