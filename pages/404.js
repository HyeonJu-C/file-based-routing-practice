import Link from 'next/link'

// 1. Next.js는 /pages/404.js를 인식할 수 있다.
// 2. 즉, 404 에러가 발생했을 때 해당 컴포넌트를 화면에 자동으로 렌더링 해 준다.
// 3. 404.js 파일이 존재하지 않을 경우에는, next.js가 기본으로 제공하는 컴포넌트를 렌더링한다.

export default function NotFoundPage() {
  return (
    <section>
      <h1>404 Error!</h1>
      <Link href="/">
        oops, you got lost! you can go back to the home page with this link.
      </Link>
    </section>
  )
}
