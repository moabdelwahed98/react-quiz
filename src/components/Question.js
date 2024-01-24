import Option from "./Option";

export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((opt, i) => (
          <Option
            key={opt}
            opt={opt}
            dispatch={dispatch}
            answer={answer}
            indx={i}
            correctAnswer={question.correctOption}
          />
        ))}
      </div>
    </div>
  );
}
