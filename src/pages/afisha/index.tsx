import Header from "../../layout/Header";

const Afisha = () => {
  return (
    <>
      <Header />
      <div className="grid-container">
        <div className="grid-container__upper-reel">
          <img className="widthaa" src="/images/afisha/reel-upper.png" alt="" />
        </div>

        <div className="grid-container__menu">
          <div className="menu-wrapper">
            <div className="menu">
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
                    <option value="Кинотеатр1">Кинотеатр1</option>
                    <option value="Кинотеатр2">Кинотеатр2</option>
                  </select>
                </div>

                <div className="menu__filter-wrapper">
                  <div className="menu__filter-text">
                    <span className="menu__filter-text__span">Когда</span>
                  </div>
                  <select className="menu__filter-select" name="date" id="date">
                    <option value="Сегодня">Сегодня</option>
                    <option value="Завтра">Завтра</option>
                  </select>
                </div>
              </div>
              <div className="menu__filter-button-wrapper">
                <div className="menu__filter-button">Подобрать</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-container__middle-reel">
          <img src="/images/afisha/reel-middle.png" alt="" />
        </div>

        <div className="grid-container__main">main</div>
      </div>
    </>
  );
};

export default Afisha;
