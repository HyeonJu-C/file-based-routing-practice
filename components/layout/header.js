import Link from 'next/link'

export default function Header() {
  return (
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
  )
}
