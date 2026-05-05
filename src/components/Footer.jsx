import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";



const Footer= ()=> {
  return (
    <footer className="bg-[#244d3f] text-white mt-20">
      <div className="max-w-6xl mx-auto px-5 py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>
        <p className="text-blue-100 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="font-semibold mb-4">Social Links</h3>
        <div className="flex justify-center gap-4 mb-10">
          <span><FontAwesomeIcon icon={faInstagram} /></span>
          <span><FontAwesomeIcon icon={faFacebook} /></span>
          <span ><FontAwesomeIcon icon={faXTwitter} /></span>
        </div>

        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer