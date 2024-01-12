import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </div>
      <div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum,
            totam expedita voluptatum aspernatur dignissimos corporis ipsa error
            quisquam assumenda?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos
            magnam explicabo libero nesciunt modi voluptate ducimus dolorem odit
            vero.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur ea maiores optio vero natus. Pariatur porro laboriosam
            animi a odit?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illum
            alias id modi ex? At, aliquid! Asperiores nisi tempore adipisci.
          </p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
