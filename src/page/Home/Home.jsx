import CategoryJobs from "../../components/CategoryJobs/CategoryJobs";
import Header from "../../components/Header/Header";

const Home = () => {
    // const handleCategory = categorie =>{
    //     console.log(categorie);
    // }
    return (
        <div>
            <Header/>
            <CategoryJobs/>
        </div>
    );
};

export default Home;