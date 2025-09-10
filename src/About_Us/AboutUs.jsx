function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-200 via-white to-blue-50">
      <main className="container mx-auto px-6 py-16 space-y-24">
        
        {/* Misión */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1A3D63" }}
            >
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-black">
              In <span className="font-bold">TechMeNow</span> We believe that education can be dynamic, creative, and accessible. Our mission is to support teachers by providing them with resources that transform their classes into motivating and meaningful experiences.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
              alt="Misión"
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/AboutUs_img/Salon.png"
              alt="Historia"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1A3D63" }}
            >
              Our History
            </h2>
            <p className="text-lg leading-relaxed text-black">
              TechMeNow was born from observing the need for teachers to maintain their students' attention and make each class more engaging. What started as a simple idea grew into a platform with resources and interactive dynamics to enhance teaching.
            </p>
          </div>
        </section>

  
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1A3D63" }}
            >
              Our Team
            </h2>
            <p className="text-lg leading-relaxed text-black">
              We are a group of young people passionate about education and technology. Our experience in academic and digital areas allows us to create solutions that connect with the needs of today's teachers.
            </p>
          </div>
          <div>
            <img
              src="/AboutUs_img/Equipoimage.jpg"
              alt="Equipo"
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Visión */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Visión"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1A3D63" }}
            >
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-black">
              We aspire for TechMeNow to be the reference platform for teachers across the country, transforming education into an inspiring experience for every student.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
