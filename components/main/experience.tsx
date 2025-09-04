export const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14">
      <h2 className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
        Experience
      </h2>
      <div className="w-full max-w-4xl px-6">
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#2A0E61]/60" />

          {/* CYBERCLIPPER SOLUTIONS LLP */}
          <div className="relative mb-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
            <div className="border border-[#2A0E61] rounded-2xl p-5 bg-[rgba(3,0,20,0.37)] text-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="text-lg font-semibold">Software Engineer • CYBERCLIPPER SOLUTIONS LLP</div>
                <div className="text-sm opacity-80">Jan 2025 – Present</div>
              </div>
              <ul className="list-disc pl-5 mt-2 opacity-90 text-sm space-y-1">
                <li>Led a cross-functional team delivering scalable, high‑performance web apps.</li>
                <li>Owned platform integrations: REST APIs, payment gateways, and third‑party services.</li>
                <li>Hired and mentored developers; improved interview loops and onboarding.</li>
                <li>Drove project planning and delivery to align software outcomes with business goals.</li>
                <li>Improved web visibility using Search Console, Analytics, and SEO best practices.</li>
              </ul>
            </div>
          </div>

          {/* NEXOCIDE */}
          <div className="relative mb-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
            <div className="border border-[#2A0E61] rounded-2xl p-5 bg-[rgba(3,0,20,0.37)] text-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="text-lg font-semibold">Full Stack Developer Intern • NEXOCIDE</div>
                <div className="text-sm opacity-80">Aug 2024 – Sep 2024</div>
              </div>
              <ul className="list-disc pl-5 mt-2 opacity-90 text-sm space-y-1">
                <li>Built end‑to‑end features with Next.js, Tailwind CSS, and Firebase; +15% engagement.</li>
                <li>Designed REST APIs and optimized database queries; reduced response time by 20%.</li>
              </ul>
            </div>
          </div>

          {/* SKYNET E-SOLUTION */}
          <div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
            <div className="border border-[#2A0E61] rounded-2xl p-5 bg-[rgba(3,0,20,0.37)] text-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="text-lg font-semibold">Software Developer Intern • SKYNET E‑SOLUTION PVT LTD</div>
                <div className="text-sm opacity-80">Jun 2024 – Aug 2024</div>
              </div>
              <ul className="list-disc pl-5 mt-2 opacity-90 text-sm space-y-1">
                <li>Improved page load speeds by 25% using PHP, JavaScript, HTML5, CSS3, Bootstrap.</li>
                <li>Contributed to CI/CD pipelines; delivered zero‑downtime launches and smoother releases.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


