// 1. /pages/about.js를 만들어서 about 경로에서 보여줄 컴포넌트를 작성할 수도 있다.
// 2. 그럼에도 about 폴더를 만들어서 /pages/about/index.js에서 컴포넌트를 작성한 이유는,
//    pages 폴더 내부의 구조를 동일하게 유지할 수 있기 때문이다.
// 3. 여러 개의 pages가 존재하는 경우에는 이 방법이 더 적절할 수 있다.

export default function AboutPage() {
  return (
    <section>
      <h1>this is aboutpage!</h1>
    </section>
  )
}
