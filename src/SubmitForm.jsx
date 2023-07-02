import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitForm() {
  const [submission, setSubmission] = useState("");
  const navigate = useNavigate();

  const handleSubmission = (event) => {
    event.preventDefault();
    const submittedValue = event.target.submission.value;
    setSubmission(submittedValue);
    console.log(submittedValue);
    navigate('/submitted');
  };

  return (
    <>
    <h1>Please rate your working experience.</h1>
    <h2>Note that all submissions are anonymous.</h2>

    <form onSubmit={handleSubmission}>
      <textarea name="submission" value={submission} onChange={(e) => setSubmission(e.target.value)}></textarea>
      <br />
      <br />
      <button type="submit">Submit Review</button>
    </form>
    </>
  );
}
