import '../../index.css';
import './Contact.css';

export default function Contact() {
    return (
        <section id='contact'>
            <h2 className='title'>🤙🏽 Contact.</h2>
            <p className='subtitle'>Email:</p>
            <a href='mailto:fjtria.dev@gmail.com' target='_blank'>📧 fjtria.dev@gmail.com ↗</a>
            <p className='subtitle'>LinkedIn:</p>
            <a href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer'>🤝 @fjtria ↗</a>
            <p className='subtitle'>Bluesky:</p>
            <a href='https://bsky.app/profile/fjtria.dev' target='_blank' rel='noopener noreferrer'>🦋 @fjtria.dev ↗</a>
        </section>
    );
}