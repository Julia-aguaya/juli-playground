import WorkCard from "./WorkCard";

function SelectedWork() {
const works = [
    
    {   id:1,
        title: "Velita",
        category: "Watercolor",
        year: "2026",
        image: "/images/velita.png",
    },
    {   id:2,
        title: "Campanita",
        category: "Watercolor",
        year: "2026",
        image: "/images/campana.png",
    },
    {   id:3,
        title: "Osito",
        category: "Watercolor",
        year: "2026",
        image: "/images/osito.png",
    },
    {   id:4,
        title: "Caramelito",
        category: "Watercolor",
        year: "2026",
        image: "/images/caramelito.png",
    },
];

return (

    


    <section className="selected_work">

        <img className="selected_work_cloud" src="/images/aero/clouds_15.png" alt="" />
        

        <img
        className="selected_work_sparkle selected_work_sparkle--one"
        src="/images/aero/flares_9.png"
        alt=""
        />

        <img
        className="selected_work_sparkle selected_work_sparkle--two"
        src="/images/aero/flares_9.png"
        alt=""
        />

        <img
        className="selected_work_sparkle selected_work_sparkle--three"
        src="/images/aero/flares_9.png"
        alt=""
        />

        <img
        className="selected_work_sparkle selected_work_sparkle--four"
        src="/images/aero/flares_9.png"
        alt=""
        />

        <img
        className="selected_work_sparkle selected_work_sparkle--five"
        src="/images/aero/flares_9.png"
        alt=""
        />

        


        <img
        className="selected_work_sticker selected_work_sticker--user_one"
        src="/images/aero/user-icon.webp"
        alt=""
        />

        <img
        className="selected_work_sticker selected_work_sticker--user_two"
        src="/images/aero/user-icon.webp"
        alt=""
        />

        <img
        className="selected_work_sticker selected_work_sticker--user_three"
        src="/images/aero/user-icon.webp"
        alt=""
        />

        <img
        className="selected_work_sticker selected_work_sticker--star_one"
        src="/images/aero/star.png"
        alt=""
        />

        <img
        className="selected_work_sticker selected_work_sticker--star_two"
        src="/images/aero/star.png"
        alt=""
        />

        <img
        className="selected_work_sticker selected_work_sticker--star_three"
        src="/images/aero/star.png"
        alt=""
        />

        <p className= "selected_work_label">01- SELECTED WORK</p>
        <h2 className="selected_work_title">Things I made </h2>

        <div className="selected_work_grid">

            {works.map((work) => (
            <WorkCard key={work.id} work={work} />
            ))}
        </div>

        <img className="selected_work_grass" src="/images/aero/grass.png" alt="Grass" />

    </section> )
}

export default SelectedWork;