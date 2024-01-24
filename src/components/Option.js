export default function Option({ opt, indx, dispatch, answer, correctAnswer }) {
  return (
    <button
      className={`btn btn-option ${answer === indx ? "answer" : ""} ${
        answer !== null && (indx === correctAnswer ? "correct" : "wrong")
      }`}
      onClick={() => dispatch({ type: "newAnswer", payload: indx })}
      disabled={answer !== null}
    >
      {opt}
    </button>
  );
}
