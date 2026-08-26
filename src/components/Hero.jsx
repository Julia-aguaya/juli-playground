function Hero() {
return (
    <section className="hero">
        <h4 className="hero_eyebrow"> Juli / Creative playground </h4>
        <h1 className="hero_title">JULI</h1>
        <p className="hero_role">Creative Developer <br />& Artist</p>
        <p className="hero_location">Rosario - Argentina</p>

        <p className="hero_scroll">Scroll to explore ↓</p>

        <img className="hero_art" src="/images/hero-watercolor.png" 
        alt="Acuarela tubo pintura y gato" />
        
        <div className="hero_bubble hero_bubble--blue"></div>
        <div className="hero_bubble hero_bubble--pink"></div>
        <div className="hero_bubble hero_bubble--yellow"></div>

    </section> 
    
    
);
}

export default Hero;