
export default function Footer() {
    const year = new Date();
  return (
    <div className="bg-gray-900 p-4">
        <footer className="flex flex-col justify-center content-center">
            <div className="flex justify-center items-center gap-5">
                <h3 className="text-center text-white font-extrabold text-lg">Follow Me</h3>
                <ul className="flex justify-center gap-5 text-white text-2xl">
                    <li className="ease-in-out duration-1000 hover:text-teal-500"><a href="https://www.linkedin.com/in/mirza-zain269/" target="_blank" rel="noopener"><i className="ri-linkedin-box-fill"></i></a></li>
                    <li className="ease-in-out duration-1000 hover:text-teal-500"><a href="https://github.com/mirza-zain" target="_blank" rel="noopener"><i className="ri-github-line"></i></a></li>
                    <li className="ease-in-out duration-1000 hover:text-teal-500"><a href="https://www.instagram.com/mirza_zain43/" target="_blank" rel="noopener"><i className="ri-instagram-fill"></i></a></li>
                </ul>
            </div>
            <div>
                <p className="text-center text-white">Mirza Zain | © {year.getFullYear()} - copyright</p>
            </div>
        </footer>
    </div>
  )
}
