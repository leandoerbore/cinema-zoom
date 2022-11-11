import Header from "../layout/header";
import Reel from "../components/Reel";

const Index = () => {
    return (
        <>
            <Header/>
            <div className="reel-wrapper">
                <Reel variant="today"/>
                <Reel variant="soon"/>
            </div>
        </>
    );
};

export default Index;