// 1. Theoritically, we can write many functions in any files.
// 2. so we need to tell Next.js "which is the component to render".
// 3. the way do that is "export default".
// 4. in this case, the HomePage is exported with default option,
//    that's why we can see the component on the domain page.

export default function HomePage() {
  return (
    <section>
      <h1>this is homepage</h1>
    </section>
  )
}
