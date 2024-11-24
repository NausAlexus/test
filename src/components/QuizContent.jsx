import React from "react";

function QuizContent({ question, onAnswerSelect }) {
    return (
        <div className="quiz-content">
            <h2 className="quiz-title">{question.title}</h2>
            {question.variants.map((variant, index) => (
                <button className="quiz-btn" key={index} onClick={() => onAnswerSelect(variant)}>
                    {variant}
                </button>
            ))}
        </div>
    );
}

export default QuizContent;