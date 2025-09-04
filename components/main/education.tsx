export const Education = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14">
      <h2 className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
        Education & Certifications
      </h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <div className="border border-[#2A0E61] rounded-2xl p-6 bg-[rgba(3,0,20,0.37)] text-gray-200">
          <div className="text-xl font-semibold">Uttaranchal University</div>
          <div className="text-sm opacity-80">Dehradun, Uttarakhand</div>
          <div className="text-sm opacity-80">September 2021 – May 2025</div>
          <div className="mt-2">B.Tech in Computer Science and Engineering</div>
          <div className="mt-1">CGPA: 9.36</div>
        </div>
        <div className="border border-[#2A0E61] rounded-2xl p-6 bg-[rgba(3,0,20,0.37)] text-gray-200">
          <div className="text-lg font-semibold mb-2">Certifications</div>
          <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
            <li>Full Stack Web Development • 8 Weeks • Internshala</li>
            <li>Web Development • 8 Weeks • Brillica Services</li>
            <li>Introduction to JavaScript • 3 Hours • Great Learning</li>
            <li>Automated Feature Extraction from High‑Resolution Images • 7.5 Hours • IIRS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};


