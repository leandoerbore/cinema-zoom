const Map = () => {
  return (
    <>
      <img className="map__reel" src="/images/afisha/reel-upper.png" />
      <div className="map-wrapper">
          {/*
          width="1392"
          height="534"
          */}
          <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Afea4571167eb09f87dafed015315db01ce5870a8a0edefcb4571c4817e6440b4&amp;source=constructor"
          width="1392"
          height="534"
          frameBorder="0"
        />
      </div>
    </>
  );
};

export default Map;
