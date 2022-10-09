import Link from 'next/link'
import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'

export default function HomePage() {
  const featuredEventList = getFeaturedEvents()
  return <EventList eventlist={featuredEventList} />
}
