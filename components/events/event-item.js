import Link from 'next/link'

export default function EventItem({ eventItem }) {
  const { id, title, date, location } = eventItem

  return (
    <li>
      <h2>{title}</h2>
      <time>{date}</time>
      <address>{location}</address>
      <Link href={`/events/${id}`}>explore this event</Link>
    </li>
  )
}
