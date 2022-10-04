import { useRouter } from 'next/router'

// 1. [file name]은 Next.js에게 해당 파일이 "동적 경로" 임을 알리는 역할을 한다.
// 2. /products/1, /products/hello 등의 "/products/무언가" 로 시작하는 경로에서 ProductDetailPage가 렌더링된다.
//    - 이러한 경로를 동적 경로라고 하는데, 같은 구조에서 다른 데이터를 보여주는 페이지에서 유용하다.
// 3. 단, /products/food 에서는 여전히 FoodPage를 렌더링한다.

export default function ProductDetailPage() {
  const router = useRouter()

  // 1. 사용자가 url에 입력한 값 => {id: 'hello'}
  console.log(router.query)
  // 2. Next.js가 추론한 현재 경로 => 전체 경로가 아니라, /products/[id]를 반환
  console.log(router.pathname)

  return (
    <section>
      <h1>product detail page</h1>
    </section>
  )
}
