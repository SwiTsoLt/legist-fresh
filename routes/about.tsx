import MyHead from "../components/myhead.tsx"
import Navbar from "../components/navbar.tsx"

export default function About() {
  return (
    <>
      <MyHead />
      <Navbar />
      <div class="mx-auto max-w-screen-md min-h-screen p-4">
        <h1>About</h1>
      </div>
    </>
  );
}
