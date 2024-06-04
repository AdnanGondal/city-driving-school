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
import FloatingWhatsapp from '@components/FloatingWhatsapp'

library.add(faChalkboardTeacher, faClock, faTag, faCar, faEnvelope, faCar)

export default function Home() {
  return (
    <div>
      <Head>
        <title>City Driving School</title>
        <meta name="description" content="City Driving School - Teaching and Safety is our priority. South London's premier driving school, offering safe, comprehensive and professional driving lessons for beginners and advanced learners." />
        <meta name="keywords" content="City Driving School, South London, Driving Lessons, Driving Instructor, Learn Driving, Teaching, Safety, Driving Teacher, Road Safety" />
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

        <section className="flex flex-col md:flex-row items-center justify-center h-auto w-full bg-brand-baby-blue overflow-hidden">
          <div
            className="w-full md:w-1/4 object-contain mx-auto md:mx-10 rounded-xl overflow-hidden p-2 pb-3 md:py-24 md:my-4"
          >
            <ImageSlider images={studentImages} />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left p-2 pb-10">
            <h1 className="text-3xl font-bold text-brand-blue mb-4">Welcome to City Driving School</h1>
            <p className='text-brand-gray text-center md:text-left md:text-l md:mt-10 font-semibold md:pr-10 sm:pr-0'>
              City Driving School, based in South London, offers top-quality, affordable driving lessons to students of all levels.
              From basic driving lessons for beginners to advanced road training for skilled drivers, we provide a comfortable,
              safe, and effective learning experience.
            </p>
          </div>
        </section>

        <section id="about" className="p-4 md:p-20 text-center md:pb-5">
          <h2 className="text-2xl text-brand-blue font-bold md:text-3xl py-10">Why Choose City Driving School?</h2>
          <ul className="text-brand-gray space-y-2">
            <li className="flex items-center justify-center pb-3">
              <span className="text-xl"><FontAwesomeIcon icon={faChalkboardTeacher} className="text-brand-red mr-2" />Experienced and patient driving instructors</span>
            </li>
            <li className="flex items-center justify-center pb-3">
              <span className="text-xl"><FontAwesomeIcon icon={faClock} className="text-brand-red mr-2" />Flexible hours including weekends and evenings</span>
            </li>
            <li className="flex items-center justify-center pb-3">
              <span className="text-xl"><FontAwesomeIcon icon={faTag} className="text-brand-red mr-2" />Competitive rates</span>
            </li>
            <li className="flex items-center justify-center pb-3">
              <span className="text-xl"><FontAwesomeIcon icon={faCar} className="text-brand-red mr-2" />Automatic cars available</span>
            </li>
          </ul>
        </section>

        <section id="courses" className="flex justify-center items-center h-full md:h-screen">
          <div className="rounded-lg shadow-lg p-8 max-w-4xl bg-brand-baby-blue">
            <h2 className="text-2xl md:text-3xl text-brand-blue font-bold mb-6">Our Driving Courses</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beginners Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-xl text-brand-red font-bold mb-2">Beginners Lessons</h3>
                <p className='text-brand-gray'>If you're new to driving, our patient and experienced instructors will take you from basic driving principles to behind-the-wheel practice. We ensure you will build confidence and skills to navigate the roads safely and comfortably.</p>
              </div>

              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1636763086471-9f29bc34ab9e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Advanced Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-xl text-brand-red font-bold mb-2">Advanced Lessons</h3>
                <p className='text-brand-gray'>For those who already know how to drive but want to become a more skilled and safer driver, our advanced lessons are an ideal choice. We cover advanced driving techniques and maneuvers, challenging road situations, fuel-saving driving and more.</p>
              </div>

              <div className="p-4">
                <img src="https://images.unsplash.com/photo-1624178503845-22325ee08f25?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Motorway Lessons" className="w-full h-40 object-cover mb-4 rounded-md" />
                <h3 className="text-xl text-brand-red font-bold mb-2">Motorway Lessons</h3>
                <p className='text-brand-gray'>Our motorway lessons are designed to give drivers confidence in motorway driving. You'll learn about safe distances, proper use of lanes, joining and leaving motorways, overtaking, and dealing with complex multi-lane situations.</p>
              </div>

            </div>
          </div>
        </section>

        <section id="testimonials" className="px-6 py-4 text-center mt-8 mb-14 h-full md:h-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl text-brand-blue font-bold mb-4 md:mb-12">Testimonials</h2>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex justify-center">
                  <TestimonialCard
                    name={testimonial.name}
                    text={testimonial.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>



        <section id="contact" className="px-6 py-8 text-center bg-brand-baby-blue">
          <h2 className="text-2xl md:text-3xl text-brand-blue font-bold mb-8 md:mt-10 ">Contact us</h2>
          <div className="flex justify-center items-center md:mb-10">
            <div className="table-container">
              <table className="table-fixed">
                <tbody>
                  <tr>
                    <td className="w-16 pr-4">
                      <div className="rounded-full bg-white p-3 shadow-md mb-8">
                        <a href="mailto:info@citydrivingschool.uk" aria-label="Our email address">
                          <FontAwesomeIcon icon={faEnvelope} className="text-brand-blue text-3xl" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="bg-white shadow-md p-3 rounded-lg mb-8">
                        <p className="text-xl"><a href="mailto:info@citydrivingschool.uk">info@citydrivingschool.uk</a></p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-16 pr-4">
                      <div className="rounded-full bg-white p-3 shadow-md mb-8">
                        <a href="tel:07879391886" aria-label="Our phone numbe">
                          <FontAwesomeIcon icon={faPhone} className="text-brand-blue text-3xl" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="bg-white shadow-md rounded-lg mb-8 p-2">
                        <p className="text-xl"><a href="tel:07879391886">07879 391886</a></p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FloatingWhatsapp />

        <Footer />


      </main>
    </div>
  )
}
