import hero from '../images/hero.jpg'

export function HomePage() {

    return(
        <div>
            <h1>Shea Duffy</h1>
            <p>Web Dev</p>
            <img className='home-hero-img' src={hero} alt='' />
            {/* <img src={require('../images/hero.jpg')} /> */}
            <p>Skills in:</p>
        </div>
    )
}