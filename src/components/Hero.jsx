function Hero() {
  return (
    <section className="hero">
      <p className="hero_eyebrow">Welcome to my little internet world</p>

      <div className="hero_copy">
        <h1 className="hero_title">
          <span>Juli&apos;s</span>
          <span>playground</span>
        </h1>

        <p className="hero_intro">
          Creative developer, watercolor artist<br />
          & collector of tiny digital worlds.
        </p>
      </div>

      <div className="hero_art_scene">
        <div className="hero_art_window">
          <div className="hero_art_bar">
            <span>paint-magic.png</span>
            <span aria-hidden="true">×</span>
          </div>

          <img
            className="hero_art"
            src="/images/hero-watercolor.png"
            alt="Watercolor of a paint tube creating a pink cat"
          />
        </div>

        <p className="hero_art_badge">made with code + watercolor</p>
      </div>

      <img
        className="hero_sticker hero_sticker--star"
        src="/images/aero/star.png"
        alt=""
      />
      <img
        className="hero_sticker hero_sticker--drop"
        src="/images/aero/water_33.png"
        alt=""
      />
      <img
        className="hero_sticker hero_sticker--sparkle"
        src="/images/aero/flares_9.png"
        alt=""
      />

      <div className="hero_bubble hero_bubble--blue"></div>
      <div className="hero_bubble hero_bubble--pink"></div>
      <div className="hero_bubble hero_bubble--yellow"></div>

      <p className="hero_location">Rosario — Argentina</p>
      <p className="hero_scroll">Scroll to explore ↓</p>
    </section>
  );
}

export default Hero;
