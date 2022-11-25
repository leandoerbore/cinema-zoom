import { useState } from "react";
import * as React from "react";
import { Position } from "../../mocks/reel";
import { variants } from "../../pages";

interface MainData {
  description: string;
  producer: string;
  time: string;
  premier: string;
  country: string;
  title: string;
  img: string;
  released: boolean;
}

interface contentProp {
  setFilmData: React.Dispatch<React.SetStateAction<any>>;
  activeForm: boolean;
  index: number;
  setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
  position: Position;
  film: IFilmData;
}

interface formProps {
  activeForm: boolean;
  setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
  position: Position;
  data: IFilmData;
}

const SLIDE_WIDTH = 317;

const Form = ({ activeForm, setActiveForm, position, data }: formProps) => {
  const {
      id,
    img,
    title,
    premier,
    country,
    description,
    time,
    producer,
    /*released,*/
  } = data;

  return (
    <>
      {activeForm && (
        <div className={"form form-" + position}>
          <div className="form-wrapper">
            <img src={img} alt="КАРИТНКА" />
            <div className="block">
              <p className="film-title">{title}</p>
              <p className="film-description">{description}</p>
              <div className="button-wrap">
                {position === "positionDown" && (
                  <button onClick={() => window.location.assign(`/afisha/${id}`)} className="purchase">Купить</button>
                )}
                {/*<button className="book">Забронировать</button>*/}
              </div>
            </div>
            <div className="film-prop">
              <p>Режиссер:&nbsp;{producer}</p>
              <p>Время:&nbsp;{time}</p>
              <p>Премьера&nbsp;в&nbsp;России: {premier}</p>
              <p>Страна:&nbsp;{country}</p>
            </div>
            <div className="closer" onClick={() => setActiveForm(false)}>
              <img src="/images/close.png" alt="a" className="closer-image" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Chevron = ({ src, classname, onClick }) => {
  return (
    <>
      <div className="chevron">
        <img src={src} className={classname} onClick={onClick} />
      </div>
    </>
  );
};

const Carousel = ({ children }) => {
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + SLIDE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - SLIDE_WIDTH;
      const maxOffSet = -(SLIDE_WIDTH * (children.length - 6));
      return Math.max(newOffset, maxOffSet);
    });
  };

  return (
    <div className="main-container">
      <Chevron
        src="/svg/chevron-left.svg"
        classname="arrow arrow-left"
        onClick={handleLeftArrowClick}
      />
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {children}
        </div>
      </div>
      <Chevron
        src="/svg/chevron-right.svg"
        classname="arrow arrow-right"
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

const Content = ({
  index,
  position,
  film,
  setActiveForm,
  activeForm,
  setFilmData,
}: contentProp) => {
  return (
    <>
      {index === 0 && position === "positionDown" && (
        <div className="reel-content">
          <img className="reel-img" src="/images/today.png" alt="reel" />
        </div>
      )}
      {index === 0 && position === "positionUp" && (
        <div className="reel-content">
          <img className="reel-img" src="/images/soon.png" alt="reel" />
        </div>
      )}
      <div
        className="reel-content"
        onClick={() => {
          setActiveForm(!activeForm);
          setFilmData(film);
        }}
      >
        <img className="reel-img" src={film.img} alt="reel" />
      </div>
    </>
  );
};

export interface IFilmsData extends Array<IFilmsData> {
  id: number;
  title: string;
  img: string;
  description: string;
  minDescription: string;
  producer: string;
  time: string;
  premier: string;
  country: string;
  age: number;
  cinema: string;
  date: string;
}
export interface IFilmData {
  id: number;
  title: string;
  img: string;
  description: string;
  minDescription: string;
  producer: string;
  time: string;
  premier: string;
  country: string;
  age: number;
  cinema: string;
  date: string;
}

const Reel = ({ films, variant }: { films: IFilmsData; variant: string }) => {
  const reelFilms = films;
  /*const reelFilms = films.filter((film) => {
    return film.date === variant
  });*/
  const position = variant === variants.today ? "positionDown" : "positionUp";

  const [activeForm, setActiveForm] = useState<boolean>(false);
  const [filmData, setFilmData] = useState(reelFilms[0]);

  return (
    <>
      <div className="reel">
        <Carousel
          children={reelFilms.map((film, index) => {
            return (
              <Content
                index={index}
                film={film}
                position={position}
                setActiveForm={setActiveForm}
                activeForm={activeForm}
                setFilmData={setFilmData}
                key={index}
              />
            );
          })}
        />
        <Form
          data={filmData}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
          position={position}
        />
      </div>
    </>
  );
};

export default Reel;
