import Layout from "./Layout";
import About from "./About";
import HeaderAll from "./HeaderAll";

const AboutPage = () => {
    const title = "About Us";
    return (
        <Layout>
            <HeaderAll title={title}/>
            <About />
        </Layout>
    )
}
export default AboutPage;