import React from "react";



export function Planes(){
    return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-700">
          Teach<span className="text-primary">Me</span>
          <span className="text-secondary">Now</span>
        </h1>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />
      </header>

      {/* Section Title */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold">
          Plan <span className="text-secondary">what you want</span> with the
          ideal plan for you
        </h2>
      </section>

      {/* Plans */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-12">
        {/* Free Plan */}
        <div className="rounded-2xl border border-gray-300 shadow p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              For <span className="font-semibold">one person</span>
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              Teach<span className="text-primary">Me</span>
              <span className="text-secondary">Now</span>Free
            </h3>
            <p className="text-3xl font-bold mb-1">0 US$</p>
            <p className="text-sm text-gray-500 mb-4">/month for one person</p>
            <p className="text-sm text-gray-700 mb-4">
              You will like everything that is included:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Conduct tests for your students to understand their learning style.</li>
              <li>✔ Plan unlimited classes.</li>
              <li>✔ Create unlimited presentations.</li>
              <li>✔ Create unlimited quizzes.</li>
              <li>✔ Video recommendations.</li>
              <li>✔ Use of a random spinner.</li>
            </ul>
          </div>
          <button className="mt-6 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary">
            Join Us
          </button>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border border-gray-300 shadow p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              For <span className="font-semibold">one person</span>
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              Teach<span className="text-primary">Me</span>
              <span className="text-secondary">Now</span>Pro
            </h3>
            <p className="text-3xl font-bold mb-1">3,99 US$</p>
            <p className="text-sm text-gray-500 mb-4">/month for one person</p>
            <p className="text-sm text-gray-700 mb-4">
              Everything that includes TeachMeNow for free and more:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Performing tests for your students to understand their learning style.</li>
              <li>✔ Planning unlimited classes.</li>
              <li>✔ Creating unlimited presentations.</li>
              <li>✔ Creating unlimited quizzes.</li>
              <li>✔ Video recommendations.</li>
              <li>✔ Use of random roulette.</li>
            </ul>
          </div>
          <button className="mt-6 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary">
            Join Us
          </button>
        </div>

        {/* Team Plan */}
        <div className="rounded-2xl border border-gray-300 shadow p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              For <span className="font-semibold">Your Team</span>
            </p>
            <h3 className="text-lg font-bold text-gray-700">
              Teach<span className="text-primary">Me</span>
              <span className="text-secondary">Now</span>Team
            </h3>
            <p className="text-3xl font-bold mb-1">15,99 US$</p>
            <p className="text-sm text-gray-500 mb-4">/for eight people</p>
            <p className="text-sm text-gray-700 mb-4">
              Everything that TeachMeNow pro includes for more people:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Performing tests for your students to understand their learning style.</li>
              <li>✔ Planning unlimited classes.</li>
              <li>✔ Creating unlimited presentations.</li>
              <li>✔ Creating unlimited quizzes.</li>
              <li>✔ Video recommendations.</li>
              <li>✔ Use of random roulette.</li>
            </ul>
          </div>
          <button className="mt-6 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary">
            Join Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Planes;