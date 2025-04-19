export default function AboutPage() {
    return (
      // <div className="max-w-5xl mx-auto px-4 py-16">
      //   <h1 className="text-4xl font-bold mb-6">About Us</h1>
      //   <p className="text-lg text-gray-700 mb-8">
      //     Welcome to our Project Library – a curated collection of student-friendly coding projects built to help you learn by doing.
      //     Whether you're just starting out or already building full-stack applications, our library provides real-world challenges to sharpen your skills.
      //   </p>
  
      //   <div className="space-y-6 text-gray-700">
      //     <section>
      //       <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
      //       <p>
      //         Our mission is to empower developers by providing hands-on coding experiences. We believe learning should be
      //         interactive, fun, and practical. That's why we've created projects across various categories and difficulty levels.
      //       </p>
      //     </section>
  
      //     <section>
      //       <h2 className="text-2xl font-semibold mb-2">💡 What We Offer</h2>
      //       <ul className="list-disc pl-5 space-y-1">
      //         <li>Beginner to advanced level projects</li>
      //         <li>Categories including Web Development, Full Stack, Analytics, and more</li>
      //         <li>Responsive layouts and real-world features</li>
      //         <li>Source code and project descriptions to guide you</li>
      //       </ul>
      //     </section>
  
      //     <section>
      //       <h2 className="text-2xl font-semibold mb-2">🚀 Why Projects?</h2>
      //       <p>
      //         Projects are the best way to solidify your coding knowledge. By building actual applications, you not only learn syntax,
      //         but also how to structure, debug, and scale your code.
      //       </p>
      //     </section>
  
      //     <section>
      //       <h2 className="text-2xl font-semibold mb-2">🙌 Get Involved</h2>
      //       <p>
      //         We’re always looking to grow this platform with new ideas. If you have a project to suggest, want to contribute, or simply want to connect—feel free to reach out!
      //       </p>
      //     </section>
      //   </div>
  
      //   <div className="mt-12 text-center">
      //     <p className="text-sm text-gray-500">Made with ❤️ by passionate developers for the dev community.</p>
      //   </div>
      // </div>
      <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                      <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                      <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                  </div>
                  <button className="sm:w-fit w-full px-3.5 py-2 bg-[#045e52] hover:bg-[#045e52] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                  </button>
              </div>
              <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
          </div>
      </div>
  </section>
                                          
    );
  }
  