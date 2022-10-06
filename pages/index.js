import Link from 'next/link'
import { getFeaturedEvents } from '../dummy-data'

export default function HomePage() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">NextEvents</Link>
          </li>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </header>
      <section>
        <ul>
          {getFeaturedEvents() //
            .map(({ id, title }) => (
              <li key={`event-${id}`}>
                <Link href={`/events/${id}`}>{title}</Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  )
}
