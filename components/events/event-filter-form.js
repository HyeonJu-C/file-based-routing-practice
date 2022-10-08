import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function EventFilterForm() {
  const router = useRouter()
  const yearRef = useRef()
  const monthRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    router.push(`/events/${yearRef.current.value}/${monthRef.current.value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="year">year</label>
      <select name="year" id="year" ref={yearRef}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      <label htmlFor="month">month</label>
      <select name="month" id="month" ref={monthRef}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <button type="submit">filter</button>
    </form>
  )
}
