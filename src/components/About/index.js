import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate') //se usa el mismo hook que index.js de home

    useEffect (()=> { //Reusado de componente home/index.js
        setTimeout (() =>{
            setLetterClass('text-animate-hover') //este es el que controla el hover
        }, 3000)
        },[])

    return(
        <>
    <div className= 'container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                />
            </h1>
            <p>My ambition is to become a professional Full Stack developer. As a professional, I have extensive knowledge of finances and understanding in how a businesses work, in the past I was leading companies to achieve challenges and goals. However, my true passion lies in technology and software development.
            On a personal level, I want to feel that I am making progress towards my goal. I want to learn new skills and apply them to challenging projects. I enjoy the idea of working in a team and collaborating with other developers to create innovative solutions.</p>
            <p>My logical and illustrative skills will help me understand technical concepts and translate them into practical solutions. Additionally, I enjoy sharing ideas with contacts and seeking opportunities for collaboration. 
            I understand that I will face challenges along the way to my ambition. The world of technology changes quickly and it is important to stay updated on the latest trends and tools. I will also need to work hard to learn new skills and improve my current ones.</p>
            <p>I am excited for the challenge and committed to doing whatever it takes to achieve my ambition of becoming a professional Full Stack developer. I am ready to leverage my resources and skills, work in a team with others, and overcome obstacles to reach my goal.</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color='#D60C2F'/>
                </div>
                <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#EA6839'/>
                </div>
                <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#2195F0'/>
                </div>
                <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#30D1F7'/>
                </div>
                <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                </div>
                <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
    )
}

export default About