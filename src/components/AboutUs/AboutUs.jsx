
const AboutUs = () => {

    return (
        <div className="pb-28">
            <h3 className="text-center py-10 text-blue-600 text-3xl font-medium">WHO WE ARE</h3>
            <h2 className="text-center text-6xl font-semibold max-w-5xl mx-auto pb-20">A Place where is the best jobs dealed and every job is high level proffession</h2>
            {/* <h2 className="text-center text-6xl max-w-5xl mx-auto pb-20">A Page where is the best products sell. Our every product is high level brands product</h2> */}
            <div className="flex flex-col lg:flex-row lg:px-20">
                <div className="lg:w-1/2">
                    <img src="https://i.ibb.co/PM5R8np/oc-011-1.jpg" alt="" />
                </div>
                <div className="lg:w-1/2">
                    <p className="md:pl-10 py-10 text-lg">At JobSynergy, we are more than just a marketplace; we are a community-driven platform dedicated to empowering individuals to achieve their professional aspirations. Founded by a team of passionate entrepreneurs and tech visionaries, JobSynergy began as a solution to a common challenge: bridging the gap between exceptional talent and the businesses that need them.
                        With a commitment to integrity, innovation, we crafted a space where opportunities flourish and career dreams are realized. Our platform is designed with the user experience at heart.
                        For job seekers, JobSynergy is a launchpad to propel your career forward.</p>
                    <p className="pl-10">1. 50+ % returning customers</p>
                    <p className="pl-10 py-4">2. 100+ positive feedbacks</p>
                    <p className="pl-10">3. Money back guarantee</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;