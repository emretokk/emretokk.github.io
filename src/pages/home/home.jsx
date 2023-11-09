import { HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="flex h-screen justify-center">
      <div className="w-[500px]">
        {/* Name and title */}
        <div className="flex flex-col items-center mt-10">
          <HiCode className="text-red-400 w-8 h-8"></HiCode>
          <h2 className="font-semibold text-xl">Emre Tok</h2>
          <h1 className="text-lg font-light text-slate-600">
            Frontend Developer
          </h1>
        </div>

        {/* Links */}
        <div>
          <ul className="flex justify-center gap-4 mt-10">
            <li className="bg-gray-200 hover:bg-gray-100 text-gray-600 hover:text-red-400 border[0.4px] border-gray-400 shadow-sm shadow-gray-600 p-1 rounded-xl transition-colors duration-50">
              <a href="https://github.com/emretokk">
                <FaGithub className="w-10 h-10"></FaGithub>
              </a>
            </li>
            <li className="bg-gray-200 hover:bg-gray-100 text-gray-600 hover:text-red-400 border[0.4px] border-gray-400 shadow-sm shadow-gray-600 p-1 rounded-xl transition-colors duration-50">
              <a href="https://tr.linkedin.com/in/emre-tok-4b56a2207">
                <FaLinkedin className="w-10 h-10"></FaLinkedin>
              </a>
            </li>
            <li className="bg-gray-200 hover:bg-gray-100 text-gray-600 hover:text-red-400 border[0.4px] border-gray-400 shadow-sm shadow-gray-600 p-1 rounded-xl transition-colors duration-50">
              <a href="https://www.instagram.com/emre.t0k/">
                <FaInstagram className="w-10 h-10"></FaInstagram>
              </a>
            </li>
            <li className="bg-gray-200 hover:bg-gray-100 text-gray-600 hover:text-red-400 border[0.4px] border-gray-400 shadow-sm shadow-gray-600 p-1 rounded-xl transition-colors duration-50">
              <a href="https://twitter.com/emre_t0k">
                <FaTwitter className="w-10 h-10"></FaTwitter>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
