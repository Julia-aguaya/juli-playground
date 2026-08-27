function FrogCollection() {
  const frogs = [
    { id: 1, name: "Sleepy frog", image: "/images/frogs/frog-01.png" },
    { id: 2, name: "Jar buddy", image: "/images/frogs/frog-02.png" },
    { id: 3, name: "Chips frog", image: "/images/frogs/frog-03.png" },
    { id: 4, name: "Wizard frog", image: "/images/frogs/frog-04.png" },
  ];

  return (
    <section className="frog_collection">
      <div className="frog_collection_heading">
        <p className="frog_collection_label">02 — FROG FILES</p>
        <h2 className="frog_collection_title">Four little frogs</h2>
        <p className="frog_collection_intro">
          A tiny watercolor archive from the pond.
        </p>
      </div>

      <div className="frog_collection_stage">
        <div className="frog_collection_ripple frog_collection_ripple--one" />
        <div className="frog_collection_ripple frog_collection_ripple--two" />

        <img
          className="frog_collection_sticker frog_collection_sticker--star"
          src="/images/aero/star.png"
          alt=""
        />
        <img
          className="frog_collection_sticker frog_collection_sticker--sparkle"
          src="/images/aero/flares_9.png"
          alt=""
        />

        <div className="frog_collection_window">
          <div className="frog_collection_window_bar">
            <span>frog-files.exe</span>
            <span className="frog_collection_window_controls" aria-hidden="true">
              <i>—</i><i>□</i><i>×</i>
            </span>
          </div>

          <div className="frog_collection_window_body">
            {frogs.map((frog) => (
              <button className="frog_collection_file" type="button" key={frog.id}>
                <span className="frog_collection_file_image">
                  <img src={frog.image} alt={frog.name} />
                </span>
                <span>{frog.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <img
        className="frog_collection_water_floor"
        src="/images/aero/water.png"
        alt=""
      />
    </section>
  );
}

export default FrogCollection;
