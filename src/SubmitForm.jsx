import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {CSSTransition} from 'react-transition-group'; 

export default function SubmitForm() {
  const [submission, setSubmission] = useState("");
  const navigate = useNavigate();
  

  const handleSubmission = (event) => {
    event.preventDefault();
    const submittedValue = event.target.submission.value;
    setSubmission(submittedValue);
    /*fetch(`http://localhost:8000/api/${submission}`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Submission successful');
          // Optionally, you can perform additional actions after successful submission
        } else {
          console.error('Error submitting form');
          // Handle error scenario
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle error scenario
      });*/
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
      <button type="submit" >Submit Review</button>
    </form>

    </>
  );
}
