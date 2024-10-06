
export default function Hero() {
  return (
    <div className="bg-gray-800 flex-1">
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-center text-5xl font-bold p-2 text-blue-600">Todo App</h1>
            <p className="text-white font-medium text-md text-center">Organize your life, one task at a time.</p>
            <button className="px-4 py-2 bg-yellow-500 items-center rounded-md my-2 mx-[45%]">Get Started</button>
        </div>
    </div>
  )
}
