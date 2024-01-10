import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let&apos;s work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>girimadhan7@gmail.com</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91-9600 288 493</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="8" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
