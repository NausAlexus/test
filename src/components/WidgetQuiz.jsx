// src/components/WidgetQuiz.jsx
import React, { useState } from "react";
import QuizContent from "./QuizContent";
import "../style/Quiz.css";
import quizConfig from "../config/main-config.json"

function WidgetQuiz() {
    const questions = quizConfig.quizQuestions[0].questions;
    const pathPrepaymentwall = quizConfig.quizQuestions[1].path;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleAnswerSelect = (answer) => {
        // Обновляем ответы пользователя
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

        // Переход к следующему вопросу или редирект
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Перенаправление на другую страницу
            window.location.href = `${pathPrepaymentwall}`; 
        }
    };

    return (
        <div className="WidgetQuiz">
            <QuizContent
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
            />
        </div>
    );
}

export default WidgetQuiz;