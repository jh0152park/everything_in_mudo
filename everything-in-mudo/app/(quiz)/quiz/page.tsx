"use client";

import { DIFFICULTY, LEVELS, QUIZ_COUNT } from "@/global/project-common";
import { generate_quiz_sequence } from "@/utils/generate-quiz-sequence";
import Image from "next/image";
import { useState } from "react";

/*

초급: 20문제, 초성 O, 공백 O
중급: 30문제, 초성 O, 공백 X
고급: 50문제, 초성 X, 공백 X

*/

export default function Quiz() {
    const [quiz, setQuiz] = useState(1);
    const quiz_count = QUIZ_COUNT[DIFFICULTY];
    const sequence = generate_quiz_sequence();

    console.log(DIFFICULTY);
    console.log(LEVELS[DIFFICULTY]);
    console.log(sequence);
    console.log(quiz_count);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen *:font-bold text-3xl gap-5">
            <div className="flex flex-col items-center">
                <span>난이도: {LEVELS[DIFFICULTY]}</span>
                <span>
                    {quiz} / {quiz_count}
                </span>
            </div>

            <Image
                src={`/resources/image/questions/${1}.jpeg`}
                alt={`${0}.question`}
                width="500"
                height="400"
            />
        </div>
    );
}
