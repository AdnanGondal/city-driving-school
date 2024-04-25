import Head from 'next/head'
import Footer from '@components/Footer'
import TestimonialCard from '@components/Testimonial'
import { studentImages } from 'utils/data'
import testimonials from "../public/testimonials.json"
import Navbar from '@components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faClock, faTag, faCar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import ImageSlider from '@components/ImageSlider'

library.add(faChalkboardTeacher, faClock, faTag, faCar, faEnvelope, faCar)

export default function Home() {
  return (
    <div>
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

      <main className="">
        <Navbar />

        <section className="flex flex-col md:flex-row items-center justify-center h-auto w-full bg-blue-50 overflow-hidden">
          <div
            className="w-full md:w-1/4 object-contain mx-auto md:mx-10 rounded-xl overflow-hidden p-2 md:py-24"
          >
            <ImageSlider images={studentImages} />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left p-2">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to City Driving School</h1>
            <p className='text-gray-600 md:text-xl'>
              City Driving School, based in South London, offers top-quality, affordable driving lessons to students of all levels.
              From basic driving lessons for beginners to advanced road training for skilled drivers, we provide a comfortable,
              safe, and effective learning experience.
            </p>
          </div>
        </section>

        <section className="p-4 md:p-20 text-center">
          <h2 className="text-2xl text-blue-600 font-bold md:text-3xl mb-4">Why Choose City Driving School?</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center justify-center">
              <span className="text-lg"><FontAwesomeIcon icon={faChalkboardTeacher} className="text-red-600 mr-2" />Experienced and patient driving instructor</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-lg"><FontAwesomeIcon icon={faClock} className="text-red-600 mr-2" />Flexible hours including weekends and evenings</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-lg"><FontAwesomeIcon icon={faTag} className="text-red-600 mr-2" />Competitive rates with discounts for block bookings</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-lg"><FontAwesomeIcon icon={faCar} className="text-red-600 mr-2" />Both automatic and manual cars available</span>
            </li>
          </ul>
        </section>

        <section className="flex justify-center items-center">
          <div className="rounded-lg shadow-lg p-8 max-w-4xl bg-blue-50">
            <h2 className="text-2xl  md:text-3xl text-blue-600 font-bold mb-6">Our Driving Courses</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beginners Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-lg text-red-600 font-bold mb-2">Beginners Lessons</h3>
                <p className='text-gray-600'>If you're new to driving, our patient and experienced instructors will take you from basic driving principles to behind-the-wheel practice. We ensure you will build confidence and skills to navigate the roads safely and comfortably.</p>
              </div>

              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1636763086471-9f29bc34ab9e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Advanced Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-lg text-red-600 font-bold mb-2">Advanced Lessons</h3>
                <p className='text-gray-600'>For those who already know how to drive but want to become a more skilled and safer driver, our advanced lessons are an ideal choice. We cover advanced driving techniques and maneuvers, challenging road situations, fuel-saving driving and more.</p>
              </div>

              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1624178503845-22325ee08f25?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Motorway Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-lg text-red-600 font-bold mb-2">Motorway Lessons</h3>
                <p className='text-gray-600'>Our motorway lessons are designed to give drivers confidence in motorway driving. You'll learn about safe distances, proper use of lanes, joining and leaving motorways, overtaking, and dealing with complex multi-lane situations.</p>
              </div>

              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1514941914047-6da56d12dc22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Night Drive Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-lg text-red-600 font-bold mb-2">Night Drive Lessons</h3>
                <p className='text-gray-600'>Driving in the dark can be daunting but with our night drive lessons, you'll become a pro in no time. We cover everything from the proper use of lights and dealing with glare, to perception of speed and distance in the reduced visibility of the night.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-4 text-center mt-8">
          <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mb-4">Testimonials</h2>

          <div className="overflow-x-auto">
            <table className="table-auto mx-auto">
              <tbody>
                <tr className="flex flex-wrap">
                  {testimonials.map((testimonial, index) => (
                    <td key={index} className="w-full sm:w-1/3">
                      <div className="inline-block mx-4 my-4">
                        <TestimonialCard
                          name={testimonial.name}
                          text={testimonial.text}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>



        <section className="px-6 py-4 text-center bg-blue-50">
          <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mb-4">Contact us</h2>
          <div className="flex justify-center items-center mb-6">
            <div className="w-1/2">
              <table className="mx-auto">
                <tbody>
                  <tr>
                    <td className="text-right pr-2 text-2xl"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /></td>
                    <td className="text-left text-xl pl-2"><a href="mailto:info@citydrivingschool.uk">info@citydrivingschool.uk</a></td>
                  </tr>
                  <tr>
                    <td className="text-right pr-2 text-2xl"><FontAwesomeIcon icon={faPhone} className="mr-2" /> </td>
                    <td className="text-left text-xl pl-2"><a href="tel:07988185961">07988815961</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


      </main>



      <Footer />
    </div>
  )
}
