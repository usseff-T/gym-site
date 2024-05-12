import {Sliderr} from "../components/Sliderr";
import AwesomeSlider from "react-awesome-slider";
import {Coach} from "../components/Coach";
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import Price from "../components/Price";
import {BlogOverView} from "../components/BlogOverView";

const Home = () => {
    const CaptionedSlider = withAutoplay(AwesomeSlider);

    return (
        <>
            {/*  Slider */}
            <Sliderr/>

            {/* Coach Section */}
            <div className={""}>
                <Coach/>
            </div>

            {/*    Price Section */}
            <Price/>

            {/*    Blog Section */}
            <BlogOverView/>

        </>);
}

export default Home;