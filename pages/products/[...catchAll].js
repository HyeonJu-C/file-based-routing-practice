import { useRouter } from 'next/router'

// 1. /products/something... 로 시작하는 모든 경로에서 해당 컴포넌트를 렌더링할 수 있다.
// 2. 단, /products/[id]나 /products/food와 같이 특정 segment이 미리 배정된 경로는 예외이다.
// 3. 예제
//    /posts/2021/12와 같이 2020년 12월에 작성된 포스트만을 필터링하는 경로가 있다면,
//    catch all 경로를 이용해서 [2021, 12] 값을 백엔드에 넘겨줄 수 있다.

export default function CatchAllProducts() {
  const router = useRouter()
  console.log(router.query) // =>  { catchAll: [ ...사용자가 입력한 모든 segment ] }

  return (
    <section>
      <h1>catch all child route, segments, of /products</h1>
    </section>
  )
}
