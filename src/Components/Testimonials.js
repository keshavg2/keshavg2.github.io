import React from "react";

const Testimonials = ({ data }) => {
  if (data) {
    //console.log(data);
    var projects = data.Blogs.map(function (Blogs) {
      return (
        <div key={Blogs.title} className="row Blog-item">
          <div className="item-wrap">
            <h5>{Blogs.title}</h5>
          </div>
          <div className="item-wrap">
          <a href={Blogs.url} title={Blogs.url}>Let's read it</a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="Blog">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Blogs.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
