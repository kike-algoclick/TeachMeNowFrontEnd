import React from "react";

//buttons added
export function Planes() {
  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold">
          Plan <span className="text-[#4A7FA7]">what you want</span> with the
          ideal plan for you
        </h2>
      </section>

      
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-6 pb-12">
        
        <div className="flex-1 h-full min-h-[600px] rounded-2xl border border-gray-300 shadow p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              For <span className="text-[#4A7FA7]">one person</span>
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              Teach<span className="text-[#1A3D63]">Me</span>
              <span className="text-[#4A7FA7]">Now</span> Free
            </h3>
            <p className="text-3xl font-bold mb-1">0 US$</p>
            <p className="text-sm text-gray-500 mb-4">/month for one person</p>
            <p className="text-sm text-[#1A3D63] mb-4">
              You will like everything that is included:
            </p>
            <p className="text-sm text-gray-700 mb-2">
              You can create plans with limits and use some of the tools provided by our website without limits, such as:
            </p>
            <ul className="space-y-2 text-sm text-[#1A3D63]">
              <li>✔ Conduct tests for your students to understand their learning style.</li>
              <li>✔ Plan limited classes (8 per week)</li>
              <li>✔ Create limited presentations.</li>
            </ul>
          </div>
          <button className="mt-6 bg-[#1A3D63] text-white py-2 rounded-lg font-medium hover:bg-primary">
            Join Us
          </button>
        </div>

        
        <div className="flex-1 h-full min-h-[600px] rounded-2xl border border-gray-300 shadow p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              For <span className="text-[#4A7FA7]">one person</span>
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              Teach<span className="text-[#1A3D63]">Me</span>
              <span className="text-[#4A7FA7]">Now</span> Pro
            </h3>
            <p className="text-3xl font-bold mb-1">3,99 US$</p>
            <p className="text-sm text-gray-500 mb-4">/month for one person</p>
            <p className="text-sm text-gray-700 mb-4">
              Everything that includes TeachMeNow for free and more:
            </p>
            <ul className="space-y-2 text-sm text-[#1A3D63]">
              <li>✔ Performing tests for your students to understand their learning style.</li>
              <li>✔ Planning unlimited classes.</li>
              <li>✔ Creating unlimited presentations.</li>
              <li>✔ Creating unlimited quizzes.</li>
              <li>✔ Video recommendations.</li>
            </ul>
          </div>
          <button className="mt-6 bg-[#1A3D63] text-white py-2 rounded-lg font-medium hover:bg-primary">
            Join Us
          </button>
        </div>

       
        <div className="flex-1 h-full min-h-[600px] rounded-2xl border border-gray-300 shadow p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              For <span className="text-[#4A7FA7]">Your Team</span>
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              Teach<span className="text-[#1A3D63]">Me</span>
              <span className="text-[#4A7FA7]">Now</span> Teams
            </h3>
            <p className="text-3xl font-bold mb-1">15,99 US$</p>
            <p className="text-sm text-gray-500 mb-4">/for eight people</p>
            <p className="text-sm text-gray-700 mb-4">
              Everything that TeachMeNow pro includes for more people:
            </p>
            <ul className="space-y-2 text-sm text-[#1A3D63]">
              <li>✔ Full and unlimited access to our tools</li>
              <li>✔ Performing tests for your students to understand their learning style.</li>
              <li>✔ Planning unlimited classes.</li>
              <li>✔ Creating unlimited presentations.</li>
              <li>✔ Creating unlimited quizzes</li>
              <li>✔ Video recommendations</li>
              <li>✔ Real time assistance from IA </li>
            </ul>
          </div>
          <button className="mt-6 bg-[#1A3D63] text-white py-2 rounded-lg font-medium hover:bg-primary">
            Join Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Planes;
