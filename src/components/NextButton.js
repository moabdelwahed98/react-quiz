export default function NextButton({ dispatch, answer, numQuestion, index }) {
  if (index < numQuestion - 1)
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion", payload: null })}
          >
            Next
          </button>
        )}
      </>
    );

  if (index === numQuestion - 1)
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finished" })}
          >
            Get result
          </button>
        )}
      </>
    );
}
