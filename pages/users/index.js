import Link from 'next/link'

export default function UsersPage() {
  // users data fetched from backend
  const users = [{ id: 'harry' }, { id: 'taylor' }, { id: 'inez' }]

  return (
    <section>
      <h1>this is user page!</h1>
      <ul>
        {users.map(({ id }) => (
          <li key={`user-page-link-${id}`}>
            {/* ❓ href에 객체를 전달하면, page reload 발생 */}
            <Link href={{ pathname: '/users/[id]', query: { id } }}>
              {`${id}'s page`}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
