export default function Progress({
  index,
  numQuestion,
  points,
  maxPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints} points
      </p>
    </header>
  );
}
