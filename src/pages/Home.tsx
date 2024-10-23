import Header from '../components/home/Header';
import UserInfoCard from '../components/home/UserInfoCard';
import MainSection from '../components/home/MainSection';
import FooterNavigation from '../components/home/FooterNavigation';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <UserInfoCard />
            <MainSection />
            <FooterNavigation />
        </div>
    );
};

export default Home;
