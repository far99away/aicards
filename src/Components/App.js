import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import SiriImage from "../images/siri.png";
import AlexaImage from "../images/alexa.png";
import CortanaImage from "../images/cortana.png";

function App() {

    return(
        <div>
            <section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
    Presonal Digital Assistants
    </p>
    <p class="subtitle">
      what you need to know
    </p>
  </div>
</section>
            
            <div className='container'>
                <section className='section'>
                <div className='columns'>
                    <div className='column is-4'>
                    <ProfileCard tilte="Alexa" handle="@Alexa98" image={AlexaImage}/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard tilte="Siri" handle="@Siri99" image={SiriImage}/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard tilte="Cortana" handle="@Cortana44" image={CortanaImage}/>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
}

export default App;