import Head from 'next/head'
import Footer from '@components/Footer'
import TestimonialCard from '@components/Testimonial'
import Image from 'next/image'
import testimonials from "../public/testimonials.json"
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container mx-auto m-0 w-full px-0 md:px-0">
      <Head>
        <title>City Driving School</title>
        <meta name="description" content="City Driving School - Teaching and Safety is our priority. South London's premier driving school, offering safe, comprehensive and professional driving lessons for beginners and advanced learners." />
        <meta name="keywords" content="City Driving School, South London, Driving Lessons, Driving Instructor, Learn Driving, Teaching, Safety, Driving Teacher, Road Safety" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "http://www.citydrivingschool.uk",
            "name": "City Driving School",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-7988-815961",
                "contactType": "Customer service",
                "email": "info@citydrivingschool.uk"
            }
        }
    `}
        </script>
      </Head>

      <main>
        <Navbar></Navbar>

        <section className="flex flex-col md:flex-row items-center justify-center h-screen w-full bg-blue-50 overflow-hidden">
          <div className="w-full md:w-1/4 object-contain mx-auto rounded-xl overflow-hidden p-2">
            <Image
              src="/city-driving-school-1.jpeg"
              alt="A happy student who has passed his exam"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-2xl text-blue-800 mb-4">Welcome to City Driving School</h2>
            <p>
              City Driving School, based in South London, offers top-quality, affordable driving lessons to students of all levels.
              From basic driving lessons for beginners to advanced road training for skilled drivers, we provide a comfortable,
              safe, and effective learning experience.
            </p>
          </div>
        </section>




        <section>
          <h2>Why Choose City Driving School?</h2>

          <ul>
            <li>Experienced and patient driving instructor</li>
            <li>Flexible hours including weekends and evenings</li>
            <li>Competitive rates with discounts for block bookings</li>
            <li>Both automatic and manual cars available</li>
          </ul>

        </section>


        <section>
          <h2>Our Driving Courses</h2>

          <h3>Beginners Lessons</h3>
          <p>If you're new to driving, our patient and experienced instructors will take you from basic driving
            principles to behind-the-wheel practice. We ensure you will build confidence and skills to navigate
            the roads safely and comfortably.
          </p>

          <h3>Advanced Lessons</h3>
          <p>For those who already know how to drive but want to become a more skilled and safer driver, our
            advanced lessons are an ideal choice. We cover advanced driving techniques and maneuvers, challenging
            road situations, fuel-saving driving and more.
          </p>

          <h3>Motorway Lessons</h3>
          <p>Our motorway lessons are designed to give drivers confidence in motorway driving. You'll learn
            about safe distances, proper use of lanes, joining and leaving motorways, overtaking, and dealing with
            complex multi-lane situations.
          </p>

          <h3>Night Drive Lessons</h3>
          <p>Driving in the dark can be daunting but with our night drive lessons, you'll become a pro in no time.
            We cover everything from the proper use of lights and dealing with glare, to perception of speed and
            distance in the reduced visibility of the night.
          </p>
        </section>


        <section className="px-6 py-4">
          <h2 className="text-xl font-bold mb-4">Testimonials</h2>

          <div className="flex flex-wrap justify-around items-stretch">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                picture={testimonial.picture}
              />
            ))}
          </div>
        </section>

        <section>

          <h2>Contact us</h2>

          <p>Email: <a href="mailto:info@citydrivingschool.uk">info@citydrivingschool.uk</a></p>
          <p>Phone: <a href="tel:07988185961">07988 815961</a></p>

        </section>

      </main>

      <Footer />
    </div>
  )
}
