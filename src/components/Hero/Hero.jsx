import '../../index.css';
import './Hero.css';
import heroImage from '../../assets/images/Hero/hero_image.webp';

export default function Hero() {
    return (
        <section id='#' className='hero'>

            <div className='hero-left'>
                <div className='text-container'>
                    <h2 className='title'>
                        <span id='wave'>👋🏽</span> Hello world.
                        </h2>
                    <p className='text'>
                        I'm FJ, a software engineer and web developer.
                    </p>
                </div>
                <div className='button-container'>
                    <a href='#about' className='button'>About me.</a>
                </div>
            </div>

            <div className='hero-right'>
                <img src={heroImage} alt='FJ Tria'></img>
            </div>

        </section>
    );
}