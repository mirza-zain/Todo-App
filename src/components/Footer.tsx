
export default function Footer() {
    const year = new Date();
  return (
    <div className="bg-gray-900 p-4">
        <footer className="flex flex-col justify-center content-center">
            <div className="flex justify-center gap-5">
                <h3 className="text-center text-blue-600 font-extrabold text-lg">Connect with Me</h3>
                <ul className="flex justify-center gap-5 text-white">
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Medium</a></li>
                </ul>
            </div>
            <div>
                <p className="text-center text-white">Copyrights Mirza Zain@{year.getFullYear()}</p>
            </div>
        </footer>
    </div>
  )
}
