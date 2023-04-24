import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Circle, MapContainer, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate') //se usa el mismo hook que index.js de home
  const refForm = useRef()

  useEffect(() => {
    //Reusado de componente home/index.js
    setTimeout(() => {
      setLetterClass('text-animate-hover') //este es el que controla el hover
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_lmxeihu',
        refForm.current,
        'n0kezVxjFQH5R6XMr'
      )
      .then(
        () => {
          alert('Message successfully sent!') //show message when mail sent
          window.location.reload(false) //reset the message window
        },
        () => {
          alert('Failed to send message, please try aagin')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15} //ide start poperty 15=1.5 seconds delay animation
            />
          </h1>
          <p>
            Thank you for taking the time to visit my contact page. As a
            freelancer, I am always open to new projects that challenge me and
            allow me to showcase my skills. Whether you have a short-term or
            long-term project in mind, I would love to hear from you. Please
            don't hesitate to contact me if you have any questions or if you are
            interested in working together. I am available to discuss your
            project requirements and can provide you with a quote based on your
            specific needs. I look forward to hearing from you soon!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Myrna Alvarado,
          <br />
          Spain,
          <br />
          Tarragona,
          <br />
          Salou,
          <br />
          <span>myrna.alvarado.ve@gmail.com</span>
        </div>
        <div className="map-wrap ">
          <MapContainer center={[41.07264, 1.14902]} zoom={13}>
            <Circle
              center={[41.07264, 1.14902]}
              fillColor={'blue'}
              radius={2000}
            ></Circle>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
