import { filmsMockData } from "../../../mocks/films";
import {MutableRefObject, useEffect, useState} from "react";
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import useSWR from "swr";

export interface filmProps {
  id: number;
  description: string;
  minDescription: string;
  producer: string;
  time: string;
  premier: string;
  country: string;
  title: string;
  img: string;
  age: number;
  cinema: string;
  date: string;
}

export interface sessionsProps extends Array<sessionsProps> {
  id: number;
  filmId: number;
  booked: number[];
  date: Date;
}

async function fetcher(key) {
  const res = await fetch(`http://localhost:3000/api/sessions/${key}`);
  if (!res.ok) throw new Error("fetcher");


  return await res.json();
}

const Seat = ({ sessionId, index }: { sessionId: number, index: number }) => {
  const [booked, setBooked] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const { data } = useSWR(sessionId.toString(), fetcher);

  return (
    <>
      <div
        onClick={() => {
          if (booked) return;
          setSelected(!selected);
        }}
        className={`film__seats-item ${selected ? "green" : ""} ${
          booked ? "red" : ""
        }`}
      />
    </>
  );
};

export default function Film({
  film,
  sessions,
}: {
  film: filmProps;
  sessions: sessionsProps;
}) {
  const includeDates = sessions.map((session) => {
    return {
      id: session.id,
      date: new Date(new Date(session.date).getTime() - 3600 * 1000 * 3),
    };
  });
  const [startDate, setStartDate] = useState(includeDates[0].date);
  registerLocale("ru", ru);
  setDefaultLocale("ru");

  const filteredPassedTime = (time) => {
    const filteredTime = includeDates.filter(({ date }) => {
      let currentDate = new Date(date);
      return currentDate.toLocaleTimeString() === time.toLocaleTimeString();
    });

    return filteredTime.length > 0;
  };

  return (
    <>
      <div className="indent" />
      {film && (
        <div className="film">
          <div className="film__main">
            <img className="film__main-img" src={film.img} alt="Картинка" />
            <div className="film__main-info">
              <h1>{film.title}</h1>
              <p>{film.description}</p>
              <p>Режиссер: {film.producer}</p>
              <p>Время: {film.time}</p>
              <p>Страна: {film.country}</p>
            </div>
          </div>

          <div className="film__booking">
            <div className="film__booking-field">
              <span>Забронировать на </span>
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                includeDates={includeDates.map(({ date }) => date)}
                showTimeSelect
                filterTime={filteredPassedTime}
                dateFormat="MMMM d, yyyy h:mm "
                className="film__booking-dataPicker"
              />
            </div>
          </div>

          <div className="film__seats">
            {includeDates.map((session) => {
              let render: JSX.Element[];
              if (
                new Date(
                  new Date(session.date).getTime()
                ).toLocaleTimeString() === startDate.toLocaleTimeString()
              ) {
                const booked = new Array(40);
                booked.fill(session.id);
                let row = 6;
                render = booked.map((id, index) => {
                  let r = false;
                  if (
                    index === 4 ||
                    index === 12 ||
                    index === 20 ||
                    index === 28 ||
                    index === 36
                  ) {
                    r = true;
                    row--;
                  }

                  return (
                    <>
                      {r && (
                        <div className="film__seats-row">
                          <span className="film__seats-row-text">{row}</span>
                        </div>
                      )}
                      <Seat sessionId={id} index={index} key={index} />
                    </>
                  );
                });
              }

              return render;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/films");
  const films = await res.json();

  const paths = films.map((film) => {
    return {
      params: { film: film.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.film;

  const resFilm = await fetch(`http://localhost:3000/api/films/${id}`);
  if (!resFilm.ok) {
    throw new Error("fetch film");
  }
  const film: filmProps = await resFilm.json();

  const resSessions = await fetch(`http://localhost:3000/api/sessions/${id}`);
  if (!resSessions.ok) {
    throw new Error("fetch session");
  }
  const sessions: sessionsProps = await resSessions.json();

  return {
    props: { film, sessions },
  };
}
