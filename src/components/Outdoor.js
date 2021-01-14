// Outdoor.js
import "./Outdoor.css";

function Outdoor({ result }) {
    // console.log(result[1] && result[1].outdoor.text);

    return (
        <article className="outdoor">
            <img src={result[1] && result[1].outdoor.images[0].big_image} alt="" className="bigImg"/>
            <div className="content">
                <button>{result[1] && result[1].outdoor.button}</button>
                <h1>{result[1] && result[1].outdoor.title}</h1>
                <p>{result[1] && result[1].outdoor.text}</p>
                <div className="smallImgs">
                    <img src={result[1] && result[1].outdoor.images[0].image_1} alt=""/>
                    <img src={result[1] && result[1].outdoor.images[0].image_2} alt=""/>
                    <img src={result[1] && result[1].outdoor.images[0].image_3} alt=""/>
                </div>
            </div>
        </article>
    )
}

export default Outdoor;