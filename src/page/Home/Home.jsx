import AboutUs from "../../components/AboutUs/AboutUs";
import CategoryJobs from "../../components/CategoryJobs/CategoryJobs";
import CollaborateEffect from "../../components/CollaborateEffect/CollaborateEffect";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
    // const handleCategory = categorie =>{
    //     console.log(categorie);
    // }
    return (
        <div>
            <Header/>
            <CategoryJobs/>
            <CollaborateEffect/>            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;