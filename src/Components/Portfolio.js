import React from "react";

const Portfolio = ({ data }) => {
  const projects = data?.projects?.map((project) => (
    <div key={project.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a href={project.url} title={project.title} target="_blank" rel="noopener noreferrer">
          <img alt={project.title} src={project.image} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{project.title}</h5>
              <p>{project.category}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="fa fa-link"></i>
          </div>
        </a>
      </div>
      <a href={project.code} target="_blank" rel="noopener noreferrer">Source code</a>
    </div>
  ));

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
