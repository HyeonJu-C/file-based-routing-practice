import { useRouter } from 'next/router'
import { getEventsByDate } from '../../dummy-data'
// FilterdEventsPage

export default function EventSlugPage() {
  const router = useRouter()
  const { slug } = router.query
  const selectedYear = slug[0]
  const selectedMonth = slug[1]

  return (
    <ul>
      {getEventsByDate({ month: selectedMonth, year: selectedYear }) //
        ?.map(({ id, title, date, location, description }) => (
          <section key={`filterd-${id}`}>
            <h1>{title}</h1>
            <p>
              on {date}, in {location}
            </p>
            <p>{description}</p>
          </section>
        ))}
    </ul>
  )
}
