import {Sliderr} from "../components/Sliderr";
import AwesomeSlider from "react-awesome-slider";
import {Coach} from "../components/Coach";
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import withCaption from 'react-awesome-slider/dist/captioned';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import style from "../index.css"
const Home = () => {
    const CaptionedSlider = withAutoplay(AwesomeSlider);

    return (
        <>
          <Sliderr/>

            <div className={""}>
                <Coach />

            </div>


        </>);
}

export default Home;