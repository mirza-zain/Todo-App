import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <div className="bg-slate-500 flex-1 overflow-hidden">
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-center text-5xl font-bold p-2 text-emerald-300">Todo App</h1>
            <p className="text-white font-medium text-md text-center">Organize your life, one task at a time.</p>
            <div className="flex justify-center items-center">
              <Link to="/todo" className="px-4 py-2 bg-yellow-500 items-center rounded-md m-2 font-medium ease-in-out duration-500 hover:bg-teal-300 ">Get Started</Link>
            </div>
        </div>
    </div>
  )
}
