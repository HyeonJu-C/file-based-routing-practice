import Link from 'next/link'
export const events = [
  {
    id: 1,
    title: 'djafhad',
    date: '2021-02-30',
    place: 'somewhere',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'party',
    date: '2020-03-30',
    place: 'NY',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'networking',
    date: '2022-04-10',
    place: 'CA',
    isFeatured: false,
  },
  {
    id: 4,
    title: 'something good',
    date: '2022-10-05',
    place: 'LA',
    isFeatured: false,
  },
]

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
          {events
            .filter(({ isFeatured }) => isFeatured === true)
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
