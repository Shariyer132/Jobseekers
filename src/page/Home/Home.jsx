import AboutUs from "../../components/AboutUs/AboutUs";
import CategoryJobs from "../../components/CategoryJobs/CategoryJobs";
import CollaborateEffect from "../../components/CollaborateEffect/CollaborateEffect";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    // const handleCategory = categorie =>{
    //     console.log(categorie);
    // }
    return (
        <>
            <Helmet>
                <title>Digilab Home</title>
            </Helmet>
            <Header />
            <CategoryJobs />
            <CollaborateEffect />
            <AboutUs />
            <Footer />
        </>
    );
};

export default Home;