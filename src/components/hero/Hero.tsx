import "./Hero.css";
const Hero = () => {
  return (
    <section className="stn_hero flex">
      <h1>
        Hi, I am <span>Minyeong Jeong.</span>
      </h1>
      <h3>A Front End Developer.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        consequatur, tempora fugiat nisi quae tempore enim, aliquid iste totam
        ratione iusto quam eum dolore praesentium reiciendis voluptas animi
        maiores quidem!
      </p>
      <a href="#" className="btn_link">
        resume
      </a>
    </section>
  );
};

export default Hero;
