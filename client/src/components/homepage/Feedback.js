import React from 'react';

const Feedback = () => {
  return (
    <section className="section-form">
      <div className="row">
        <h2>We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="post" action="# " className="contact-form">
          <div className="row">
            <div className="col span-1-of-3">
              <label className="name">Name</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label className="email">Email</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label className="find-us">How did you find us?</label>
            </div>
            <div className="col span-2-of-3">
              <select
                name="find-us"
                id="find-us"
                value="Friends"
                readOnly="true"
              >
                <option value="friends">Friends</option>
                <option value="ad">Advertisement</option>
                <option value="search">Search Engine</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>Newsletter</label>
            </div>
            <div className="col span-2-of-3">
              <input type="checkbox" name="news" id="news" defaultChecked />{' '}
              Yes, please
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>Drop us a line</label>
            </div>
            <div className="col span-2-of-3">
              <textarea name="message" placeholder="Your message" />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <input type="submit" value="Send it!" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
