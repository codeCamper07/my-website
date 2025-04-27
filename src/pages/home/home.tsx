import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { Globe, Download } from 'lucide-react'
import './home.css'
import { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Home = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update the path to your PDF file
    link.download = 'Bhargav_Resume.pdf' // Set the desired file name
    link.click()
    link.remove()
    toast.success('Dowloaded')
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID || '',
        import.meta.env.VITE_EMAIL_TEMPLATE_ID || '',
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY || '',
      )
      .then(() => {
        toast.success('Message Sent')
        return (e.target as HTMLFormElement).reset() // Reset the form fields after submission
      })
      .catch((error) => {
        toast.error('Unable to send Message')
        console.error('Failed to send email:', error)
      })
  }

  return (
    <>
      <Header />
      <div>
        <div id='hero' className='hero bg-base-200 min-h-screen'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <img
              src='/profile.png'
              className='max-w-2xs rounded-lg shadow-2xl'
            />
            <div>
              <h1 className='text-5xl font-bold heading'>
                Hello 👋, I am Bhargav!
              </h1>
              <p className='py-6'>
                I am a passionate full-stack developer with expertise in
                building scalable web applications. I love solving complex
                problems with clean and efficient code.
              </p>
              <button
                onClick={() => {
                  downloadResume()
                }}
                className='btn btn-accent'>
                <Download className='w-3.5' /> Dowload Resume
              </button>
            </div>
          </div>
        </div>
        <div className='sections bg-base-100'>
          <div className='text-left w-full'>
            <h1 className='text-3xl font-bold heading'>Education</h1>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex gap-3.5'>
              <div className='avatar'>
                <div className='w-12 rounded-full max-sm:w-10'>
                  <img src='/ibs.avif' alt='IBS Logo' />
                </div>
              </div>
              <div className='flex flex-col'>
                <a
                  href='https://www.icfaiuniversity.in/'
                  target='_blank'
                  className='heading font-semibold link link-hover'>
                  ICFAI Business School
                </a>
                <p>Bachelors Degree on Business Administration (BBA)</p>
              </div>
            </div>
            <div>
              <p>2018-2021</p>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex gap-3.5'>
              <div className='avatar'>
                <div className='w-12 rounded-full max-sm:w-10'>
                  <img src='/srichai.webp' alt='SR Logo' />
                </div>
              </div>
              <div className='flex flex-col'>
                <a
                  href='https://srichaitanyajuniorcollege.com/'
                  target='_blank'
                  className='heading font-semibold link link-hover'>
                  Sri Chaithanya Jr Collage
                </a>
                <p>Intermediate (MPC)</p>
              </div>
            </div>
            <div>
              <p>2016-2018</p>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex gap-3.5'>
              <div className='avatar'>
                <div className='w-12 rounded-full max-sm:w-10'>
                  <img src='/iea.png' alt='IEA Logo' />
                </div>
              </div>
              <div className='flex flex-col'>
                <a
                  href='https://internationalschoolshaikpet.com/'
                  target='_blank'
                  className='heading font-semibold link link-hover'>
                  Internation School (IEA)
                </a>
                <p>Indian Board of Secondary Education (10th) (ICSE)</p>
              </div>
            </div>
            <div>
              <p>2016</p>
            </div>
          </div>
        </div>
        <div className='sections bg-base-300'>
          <h1 className='heading text-3xl  font-semibold '>Skills</h1>
          <div className='flex gap-1 flex-wrap'>
            <div className='badge badge-accent '>React JS</div>
            <div className='badge badge-accent '>Node JS</div>
            <div className='badge badge-accent '>Next JS</div>
            <div className='badge badge-accent '>Python</div>
            <div className='badge badge-accent '>JavaScript</div>
            <div className='badge badge-accent '>Sqlite</div>
            <div className='badge badge-accent '>MongoDB</div>
            <div className='badge badge-accent '>HTML</div>
            <div className='badge badge-accent '>CSS</div>
          </div>
        </div>
        <div id='projects' className='sections bg-base-100'>
          <h1 className='heading text-3xl font-semibold'>Projects</h1>
          <div className='flex justify-items-center-safe gap-4 flex-wrap'>
            <div className='bg-base-300  w-42 sm:w-52 md:w-62 lg:w-96 shadow-sm card card-xs sm:card-sm md:card-md lg:card-lg'>
              <figure>
                <img
                  className='aspect-[16/9] object-cover'
                  src='/devstore.png'
                  alt='devstore'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>DevStore</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className='card-actions justify-start'>
                  <a
                    href='https://devstorebd.netlify.app/login'
                    target='_blank'
                    className='badge badge-accent'>
                    <Globe className='w-4' />
                    website
                  </a>
                </div>
              </div>
            </div>
            <div className='bg-base-300  w-42 sm:w-52 md:w-62 lg:w-96 shadow-sm card card-xs sm:card-sm md:card-md lg:card-lg'>
              <figure>
                <img
                  className='aspect-[16/9] object-cover'
                  src='/todo.png'
                  alt='todoapp'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>Todo App</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className='card-actions justify-start'>
                  <a
                    href='https://bhargavd1.ccbp.tech/'
                    target='_blank'
                    className='badge badge-accent'>
                    <Globe className='w-4' />
                    website
                  </a>
                </div>
              </div>
            </div>
            <div className='bg-base-300 w-42 sm:w-52 md:w-62 lg:w-96 shadow-sm card card-xs sm:card-sm md:card-md lg:card-lg'>
              <figure>
                <img
                  className='aspect-[16/9] object-cover'
                  src='/wikisearch.png'
                  alt='devstore'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>Wiki Search App</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className='card-actions justify-start'>
                  <a
                    href='https://bhargavd2.ccbp.tech/'
                    target='_blank'
                    className='badge badge-accent'>
                    <Globe className='w-4' />
                    website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='contact' className='sections bg-base-300 '>
          <h1 className='heading text-3xl font-semibold'>Contact</h1>
          <div className='container flex justify-center'>
            <div className='w-109'>
              <div className=' px-8 py-6 bg-base-100 rounded-lg shadow-lg'>
                <form onSubmit={sendEmail}>
                  <div className='mb-4'>
                    <label className='block text-gray-800 mb-1' htmlFor='name'>
                      Your Name
                    </label>
                    <input
                      className='w-full px-4 py-2 bg-base-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300'
                      placeholder='Enter your name'
                      type='text'
                      id='name'
                      name='name'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-800 mb-1' htmlFor='email'>
                      Your Email
                    </label>
                    <input
                      className='w-full px-4 py-2 bg-base-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300'
                      placeholder='Enter your email'
                      name='email'
                      id='email'
                      type='email'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      className='block text-gray-800 mb-1'
                      htmlFor='message'>
                      Your Message
                    </label>
                    <textarea
                      className='w-full px-4 py-2 bg-base-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300'
                      rows={4}
                      required
                      placeholder='Enter your message'
                      name='message'
                      id='message'></textarea>
                  </div>
                  <button
                    className='w-full bg-accent text-gray-800 py-2 px-4 rounded-lg hover:bg-primary-content transition duration-300'
                    type='submit'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position='bottom-right' />
      <Footer />
    </>
  )
}

export default Home
