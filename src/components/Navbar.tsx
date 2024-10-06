
export default function Navbar() {
  return (
    <div className="bg-gray-900 w-screen h-[10%] p-4 flex justify-between content-center">
        <div className="nav-left">
            <h1 className="text-blue-600 font-bold text-xl">TODO APP</h1>
        </div>
        <div className="nav-bottom">
            <ul className="flex gap-5 text-white">
                <li className="text-lg font-semibold"><a href="#">Home</a></li>
                <li className="text-lg font-semibold"><a href="#">Todo App</a></li>
            </ul>
        </div>
        <div className="nav-right">
            <button type="button" onClick={() => window.location.href = "#"} className="px-4 py-2 bg-yellow-400 rounded-md">Connect</button>
        </div>
    </div>
  )
}
