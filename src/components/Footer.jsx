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
          <span className="bg-white text-green-700 w-10 h-10 rounded-full grid place-items-center">◎</span>
          <span className="bg-white text-green-700 w-10 h-10 rounded-full grid place-items-center">f</span>
          <span className="bg-white text-green-700 w-10 h-10 rounded-full grid place-items-center">𝕏</span>
        </div>

        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between text-blue-200 text-sm">
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