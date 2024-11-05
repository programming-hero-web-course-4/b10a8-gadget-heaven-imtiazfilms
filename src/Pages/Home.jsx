import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
// import Categories from "../Components/Categories";


const Home = () => {
    const categories = useLoaderData;
    console.log(categories)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4">
                {/* <div>
                    <Categories categories={categories}></Categories>
                </div> */}
                <div className="col-span-3">

                </div>
            </div>
        </div>
    );
};

export default Home;