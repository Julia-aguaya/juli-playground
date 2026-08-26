function WorkCard( {work} ) {
return (
    <article className="work_card">
        <div className="work_card_bar">
            <span>{work.title}.png - Paint</span>

            <div className="work_card_controls">
            <span>─</span>
            <span>□</span>
            <span>×</span>
            </div>
        </div>

        <div className="work_card_canvas">
            <img
                className="work_card_image"
                src={work.image}
                alt={work.title}
            />
        </div>

        <div className="work_card_footer">
            <h3 className="work_card_title">{work.title}</h3>
            <p className="work_card_info">
            {work.category} / {work.year}
            </p>
        </div>

        
    </article>
);
}

export default WorkCard;