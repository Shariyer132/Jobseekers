import headerImg from '../../assets/2.png';

const Header = () => {
    return (
        <div className="hero min-h-screen bg-[#FFFF]">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-2/3'>
                    <h1 className="text-5xl font-bold">Digilab: Connecting Talent with Opportunity</h1>
                    <p className="py-6">Welcome to Digilab, the premier online marketplace for job seekers and employers. Our platform bridges the gap between skilled professionals and innovative companies. Whether you are a web developer, digital marketer, or graphic designer, Digilab offers a dynamic space.</p>
                    <button className="btn btn-info text-white">Get Started</button>
                </div>
                <div className='w-1/3'>
                    <img src={headerImg} className="max-w-sm rounded-lg " />
                </div>
            </div>
        </div>
    );
};

export default Header;