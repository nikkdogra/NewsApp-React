import { useContext } from "react";
import ModeContext from "../context/ModeContext";

const NewsItem = ({ title, description, url, src }) => {

    if (!src) {
        return;
    }

    const mode = useContext(ModeContext);

    return (
        <div className={`news-item hover-news-${mode} col-12 col-sm-6 col-md-4 col-lg-3 rounded`}>

            <div className="img-box">
                <img src={src} alt="News Thumbnail"/>
            </div>

            <div className={`content bg-${mode === 'light' ? 'danger' : 'dark'} text-light p-3`}>

                <h5>{title.slice(0, 50) + '...'}</h5>
                <p>{description && description.slice(0, 80) + '. . . .'}</p>
                <a className={`btn btn-outline-light search-btn-${mode}`} target="_blank" href={url}>Read More</a>

            </div>
            
        </div>
    )
}

export default NewsItem
