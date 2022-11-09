import { Link } from "@remix-run/react"

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-swing-primary pt-10  text-swing-text">
      <h1 className="pb-10 text-6xl font-bold">Remix Electro Swing Stack</h1>
      <div className="flex w-96 justify-between pb-4 underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}
