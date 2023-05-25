import React, { useState } from "react";

export default function SubmitForm() {
  const [submission, setSubmission] = useState("");

  const handleSubmission = (event) => {
    event.preventDefault(); // Prevents the form from being submitted and refreshing the page
    setSubmission(event.target.elements.submission.value);
    console.log(submission); // Log the submission value when the form is submitted
  };

  return (
    <form onSubmit={handleSubmission}>
      <textarea name="submission"></textarea>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
