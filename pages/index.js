import Link from 'next/link'
// 1. Theoritically, we can write many functions in any files.
// 2. so we need to tell Next.js "which is the component to render".
// 3. the way do that is "export default".
// 4. in this case, the HomePage is exported with default option,
//    that's why we can see the component on the domain page.

export default function HomePage() {
  return (
    <section>
      <h1>this is homepage</h1>
      <ul>
        <li>
          <a href="/products">Products page with Anchor</a>
        </li>
        <li>
          <Link href="/products">Products page with Link</Link>
        </li>
        <li>
          <Link href="users">users page</Link>
        </li>
      </ul>
    </section>
  )
}

// 5. <a> vs. <Link>
//    1) a 태그를 이용해서 페이지 이동시, http 요청이 발생한다. 즉 브라우저가 창을 새로고침 한다.
//        - 브라우저 창의 아이콘이 spinner로 변한다.
//    2) 따라서 어플리케이션에 저장된 모든 state(특정 컴포넌트의 state, app wide state 등 모든 state)가 초기화된다.
//    3) Link 태그는 http 요청 없이 페이지를 전환한다.
//        - 브라우저 창의 아이콘이 spinner로 변하지 않는다.
//    4) 뿐만 아니라 Link 태그는 다양한 property를 가지고 있다.
//        - replace, 페이지를 전환할 때 "이전 페이지로 이동" 기능을 사용하지 못하게 한다.
//        - 사용자가 Link를 hover 했을 때, 미리 그 Link에서 필요로 하는 data를 fetching 한다.
//        - ... etc
