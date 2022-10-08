import Link from 'next/link'
import EventList from '../components/events/event-list'
import Header from '../components/header'
import { getFeaturedEvents } from '../dummy-data'

export default function HomePage() {
  const featuredEventList = getFeaturedEvents()
  return (
    <>
      <Header />
      <EventList eventlist={featuredEventList} />
    </>
  )
}
