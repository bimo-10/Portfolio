import React, { useState } from "react";
import SuccessModal from "../modal/SuccessModal";

function ContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, comment);
    return <SuccessModal />;
  };
  return (
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleCommentSubmit} className="card-body">
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Username {name}</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="your name"
            className="input input-bordered"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="form-control">
          <label htmlFor="comment" className="label">
            <span className="label-text">Comments</span>
          </label>
          <textarea
            id="comment"
            placeholder="Comments"
            className="textarea textarea-bordered textarea-sm w-full max-w-lg"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <label htmlFor="my-modal-4" className="btn btn-primary" type="submit">
            Submit
          </label>
        </div>
      </form>
    </div>
  );
}

export default ContactCard;
