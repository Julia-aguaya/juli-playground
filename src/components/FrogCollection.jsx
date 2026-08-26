function FrogCollection() {

const frogs = [
  {
    id: 1,
    name: "Frog 01",
    image: "/images/frogs/frog-01.png",
  },
  {
    id: 2,
    name: "Frog 02",
    image: "/images/frogs/frog-02.png",
  },
  {
    id: 3,
    name: "Frog 03",
    image: "/images/frogs/frog-03.png",
  },
  {
    id: 4,
    name: "Frog 04",
    image: "/images/frogs/frog-04.png",
  },
];

return (
<section className="frog_collection">
    <p className="frog_collection_label">
        02 - FROG COLLECTION
    </p>

    <h2 className="frog_collection_title">
        Four little frogs
    </h2>

    <div className="frog_collection_stage">

    <img
        className="frog_collection_water"
        src="/images/aero/water_12.png"
        alt=""
    />

    <div className="frog_collection_ring">
        {frogs.map((frog) => (
            <div
            key={frog.id}
            className={`frog_collection_frog frog_collection_frog--${frog.id}`}
            >
            <img
                className="frog_collection_frog_image"
                src={frog.image}
                alt={frog.name}
            />
            </div>
        ))}
    </div>

    </div>
</section>
);
}