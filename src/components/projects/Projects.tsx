import "./Projects.css";
const Projects = () => {
  return (
    <section className="stn_projects flex">
      <h2>PROJECTS</h2>
      <div className="cards-wrapper flex">
        <article className="flex">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            placeat non.
          </p>
          <p className="card_paragraph">JavaScript React Sass</p>
        </article>
        <article className="flex">
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            placeat non.
          </p>
          <p className="card_paragraph">JavaScript React Sass</p>
        </article>
        <article className="flex">
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            placeat non.
          </p>
          <p className="card_paragraph">JavaScript React Sass</p>
        </article>
      </div>
    </section>
  );
};

export default Projects;
