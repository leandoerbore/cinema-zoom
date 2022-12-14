import Header from "../../layout/Header";
import { filmsData, filmsMockData } from "../../mocks/films";
import Link from "next/link";
import { useEffect, useState } from "react";

interface filmProps {
  id: number;
  minDescription: string;
  description: string;
  producer: string;
  time: string;
  premier: string;
  country: string;
  title: string;
  img: string;
}

const FilmItem = ({
  description,
  minDescription,
  time,
  producer,
  country,
  premier,
  img,
  title,
  id,
}: filmProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="main-item"
    >
      <Link href={`/afisha/${id}`}>
        <a className="main-item">
          {isShown && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="main-description"
            >
              <span>{minDescription}</span>
            </div>
          )}
          <img className="main-item" src={img} alt="Картинка" />
        </a>
      </Link>
    </div>
  );
};

const Afisha = (data) => {
  const [films, setFilms] = useState(data.films);

  const refreshData = (event) => {
    event.preventDefault();
    const { country, age, cinema, date } = event.target;

    const filteredData = data.films.filter(
      film =>
        (country.value === "null" || film.country.match(country.value)) &&
        (age.value === "null" || film.age >= age.value) &&
        (cinema.value === "null" || film.cinema.match(cinema.value)) &&
        (date.value === "null" || film.date === date.value)
    );


    setFilms(filteredData);
  };

  return (
    <>
      <div className="grid-container">
        <div className="grid-container__upper-reel">
          <img className="widthaa" src="/images/afisha/reel-upper.png" alt="" />
        </div>

        <div className="grid-container__menu">
          <div className="menu-wrapper">
            <div className="menu">
              <form onSubmit={refreshData}>
                <div className="menu__filter">
                  <div className="menu__filter-wrapper">
                    <div className="menu__filter-text">
                      <span className="menu__filter-text__span">Страна</span>
                    </div>
                    <select
                      className="menu__filter-select"
                      name="country"
                      id="country"
                    >
                      <option value="null">Любая</option>
                      <option value="Россия">Россия</option>
                      <option value="США">США</option>
                    </select>
                  </div>

                  <div className="menu__filter-wrapper">
                    <div className="menu__filter-text">
                      <span className="menu__filter-text__span">
                        Возрастной рейтинг
                      </span>
                    </div>
                    <select className="menu__filter-select" name="age" id="age">
                      <option value="null">Любой</option>
                      <option value="13">0+</option>
                      <option value="13">13+</option>
                      <option value="16">16+</option>
                      <option value="18">18+</option>
                      <option value="21">21+</option>
                    </select>
                  </div>

                  <div className="menu__filter-wrapper">
                    <div className="menu__filter-text">
                      <span className="menu__filter-text__span">Кинотеатр</span>
                    </div>
                    <select
                      className="menu__filter-select"
                      name="cinema"
                      id="cinema"
                    >
                      <option value="null">Любой</option>
                      <option value="Невский">Невский</option>
                      <option value="Витебский">Витебский</option>
                      <option value="Балтика">Балтика</option>
                    </select>
                  </div>

                  <div className="menu__filter-wrapper">
                    <div className="menu__filter-text">
                      <span className="menu__filter-text__span">Когда</span>
                    </div>
                    <select
                      className="menu__filter-select"
                      name="date"
                      id="date"
                    >
                      <option value="null"></option>
                      <option value="Сегодня">Сегодня</option>
                      <option value="Завтра">Завтра</option>
                    </select>
                  </div>

                  <button type="submit" className="menu__filter-button">
                    Подобрать
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid-container__middle-reel">
          <img src="/images/afisha/reel-middle.png" alt="" />
        </div>

        <div className="grid-container__main">
          <div className="main-wrapper">
            <div className="main">
              {films.map(
                (
                  {
                    description,
                    time,
                    producer,
                    country,
                    premier,
                    img,
                    title,
                    minDescription,
                    id,
                  },
                  index
                ) => {
                  return (
                    <FilmItem
                      description={description}
                      title={title}
                      premier={premier}
                      time={time}
                      country={country}
                      producer={producer}
                      img={img}
                      minDescription={minDescription}
                      id={id}
                      key={index}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Afisha;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/films");
  if (!res.ok) {
    throw new Error("fetch");
  }
  const films = await res.json();
  return {
    props: { films },
  };
}
