import { useState } from "react";
import * as React from "react";
import { mockDataSoon, mockDataToday, Position } from "../../mocks/reel";

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
  data: MainData;
}

interface formProps {
  activeForm: boolean;
  setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
  position: Position;
  data: MainData;
}

const SLIDE_WIDTH = 317;

const Form = ({ activeForm, setActiveForm, position, data }: formProps) => {
  const {
    img,
    title,
    premier,
    country,
    description,
    time,
    producer,
    released,
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
                {!released && <button className="purchase">Купить</button>}
                <button className="book">Забронировать</button>
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
      const maxOffSet = -(SLIDE_WIDTH * (children.length - 7));
      console.log(children.length);
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
  data,
  setActiveForm,
  activeForm,
  setFilmData,
}: contentProp) => {
  if (index === 0)
    return (
      <>
        {position === "positionDown" && (
          <div className="reel-content">
            <img className="reel-img" src="/images/today.png" alt="reel" />
          </div>
        )}

        {position === "positionUp" && (
          <div className="reel-content">
            <img className="reel-img" src="/images/soon.png" alt="reel" />
          </div>
        )}
      </>
    );
  return (
    <>
      <div
        className="reel-content"
        onClick={() => {
          setActiveForm(!activeForm);
          setFilmData(data);
        }}
      >
        <img className="reel-img" src={data.img} alt="reel" />
      </div>
    </>
  );
};

const Reel = (mockData: { variant: string }) => {
  const { position, data } =
    mockData.variant === "today" ? mockDataToday : mockDataSoon;
  const [activeForm, setActiveForm] = useState<boolean>(false);
  const [filmData, setFilmData] = useState(data[0]);

  return (
    <>
      <div className="reel">
        <Carousel
          children={data.map((data, index) => {
            return (
              <Content
                index={index}
                data={data}
                position={position}
                setActiveForm={setActiveForm}
                activeForm={activeForm}
                setFilmData={setFilmData}
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
