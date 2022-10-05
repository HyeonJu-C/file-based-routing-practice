import { useRouter } from 'next/router'
import { events } from '../../pages/index'

// FilterdEventsPage

export default function EventSlugPage() {
  const router = useRouter()
  const { slug } = router.query
  const selectedYear = slug[0]
  const selectedMonth = slug[1]

  return (
    <ul>
      {events
        .filter(({ date }) => {
          const year = date.split('-')[0]
          const month = date.split('-')[1]
          return year === selectedYear && month === selectedMonth
        })
        .map(({ id, title, date, place }) => (
          <section key={`filterd-${id}`}>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>in {place}</p>
          </section>
        ))}
    </ul>
  )
}
