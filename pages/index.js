import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import TestimonialCard from '@components/Testimonial'
import Image from 'next/image'
import testimonials from "../public/testimonials.json"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>City Driving School</title>
        <meta name="description" content="City Driving School - Teaching and Safety is our priority. South London's premier driving school, offering safe, comprehensive and professional driving lessons for beginners and advanced learners." />
        <meta name="keywords" content="City Driving School, South London, Driving Lessons, Driving Instructor, Learn Driving, Teaching, Safety, Driving Teacher, Road Safety" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/logo.jpeg"
          alt="City driving school logo, a blue steering wheel."
          width={200}
          height={80}
        />

        <h1>Welcome to City Driving School</h1>

        <Image
          src="/city-driving-school-1.jpeg"
          alt="A happy student who has passed his exam"
          width={400}
          height={400}
        />

        <p>
          City Driving School, based in South London, offers top-quality, affordable driving lessons to students of all levels.
          From basic driving lessons for beginners to advanced road training for skilled drivers, we provide a comfortable,
          safe, and effective learning experience.
        </p>

        <h2>Why Choose City Driving School?</h2>

        <ul>
          <li>Experienced and patient driving instructor</li>
          <li>Flexible hours including weekends and evenings</li>
          <li>Competitive rates with discounts for block bookings</li>
          <li>Both automatic and manual cars available</li>
        </ul>

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

        <h2>Testimonials</h2>

        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            picture={testimonial.picture}
          />
        ))}

        <h2>Contact us</h2>

        <p>Email: <a href="mailto:info@citydrivingschool.uk">info@citydrivingschool.uk</a></p>
        <p>Phone: <a href="tel:07988185961">07988 815961</a></p>




      </main>

      <Footer />
    </div>
  )
}
