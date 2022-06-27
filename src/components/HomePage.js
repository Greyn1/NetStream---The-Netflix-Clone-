import Category from "./Category";
import { RequestUrl } from "../API/RequestUrls";
const HomePage = () => {
    return (
        <div style={{paddingTop:"70px"}}>
            <Category title='New Movies' requestUrl={RequestUrl.new} />
            <Category title='Upcoming Movies' requestUrl={RequestUrl.upcoming} />
            <Category title='Trending Movies' requestUrl={RequestUrl.trendingMovies} />
        </div>
    );
}

export default HomePage;