import { forwardRef, useContext } from "react"
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import ModeContext from "../context/ModeContext";

const NewsBoard = forwardRef(({ news, error }, ref) => {

  const mode = useContext(ModeContext);

  return (
    <div className={`d-flex justify-content-center align-items-center flex-wrap gap-5 p-5 bg-${mode === 'light' ? 'light' : 'black'}`} ref={ref}>

      {
        news.length
          ?
          news.map((e, i) => <NewsItem
            key={i}
            title={e.title}
            description={e.description}
            url={e.url}
            src={e.urlToImage}
          />)
          :
          <Spinner error={error} />
      }

    </div>
  )
});

export default NewsBoard