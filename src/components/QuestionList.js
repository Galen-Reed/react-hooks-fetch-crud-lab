import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuizQuestions(data);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setQuizQuestions(quizQuestions.filter((question) => question.id !== id));
      });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quizQuestions.map((question) => (
          <QuestionItem key={question.id} question={question} handleDelete={handleDelete}/>
        ))}
        </ul>
    </section>
  );
}

export default QuestionList;
