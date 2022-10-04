import { useRouter } from 'next/router'
// 폴더를 동적 경로로 지정할 수도 있다.

export default function UserDetailPage() {
  const router = useRouter()
  const { userId } = router.query
  const navigateToCart = () => {
    // Link와 마찬가지로 string 대신 object을 전달할 수 있다.
    // ❓ 이번엔 page reload가 발생하지 않음
    router.push({
      pathname: '/users/[userId]/cart',
      query: {
        userId,
      },
    })
  }

  return (
    <section>
      <h1>this is user detail page!</h1>
      <button onClick={navigateToCart}>navigate to cart page</button>
    </section>
  )
}

// replace vs. push
// 1. replace
//    - router.replace(`/users/${userId}/cart`)
//    - 바로 이전에 머물렀던 페이지에 대한 기록이 사라진다.
//    - 전전 또는 전전전... 페이지에 대한 기록은 남기때문에, 뒤로 가기를 눌렀을 때 전전 페이지로 이동한다.
// 2. push
//    - router.push(`/users/${userId}/cart`)
//    - 이전 페이지에 대한 기록을 그대로 가져가면서, 페이지를 이동한다.
