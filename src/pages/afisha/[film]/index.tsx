import { useRouter } from "next/router";
import { filmsData, filmsMockData } from "../../../mocks/films";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import useSWR from "swr";
import films from "../../api/films";

async function fetcher(key) {
  const res = await fetch(window.location.origin + key.url);
  if (!res.ok) throw new Error("fetcher");
  const response: filmsMockData = await res.json();

  const content = response.data.filter((film) => {
    return film.id === Number(key.id);
  });

  return content;
}

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

export default function Film({film} : {film: filmProps}) {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale("ru", ru);
  setDefaultLocale("ru");

  return (
    <>
      <div className="indent"></div>
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
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="film__booking-dataPicker"
              />
            </div>
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

  const res = await fetch(`http://localhost:3000/api/films/${id}`);

  const film = await res.json()

  return {
    props: {film}
  }
}
