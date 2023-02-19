import MyHead from "../components/myhead.tsx"
import Navbar from "../components/navbar.tsx"

export default function Home() {
  return (
    <>
      <MyHead />
      <Navbar />
      <div class="mx-auto max-w-screen-md min-h-screen p-4">
        <h1>Home</h1>
      </div>
    </>
  );
}
