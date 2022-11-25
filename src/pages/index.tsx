import Reel, {IFilmsData} from "../components/Reel";

export enum variants{
    today= "Сегодня",
    soon="Завтра"
}

const Index = ({films} : {films: IFilmsData}) => {
    return (
        <>
            <div className="reel-wrapper">
                <Reel films={films} variant={variants.today}/>
                <Reel films={films} variant={variants.soon}/>
            </div>
        </>
    );
};

export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/films')
    if (!res.ok){
        throw new Error('fetch')
    }

    const films: IFilmsData = await res.json()

    return {
        props: {films}
    }
}

export default Index;