import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx}) => { 
    return (
        <span>
            {
                strArray.map((char, i) =>(
                <span key={char + i} className={`${letterClass} _${i + idx}`} >
                    {char}
                </span>
                ))
            }
        </span>
    )
}
export default AnimatedLetters


//En const AnimatedLetters = ({ letterClass, strArray, idx}):
//declaramos la clase que se va a dar al caracter, el array que se dara y el index que marcara el delay con que se animará