"use client";

import { DIFFICULTY, LEVELS, QUIZ_COUNT } from "@/global/project-common";
import { generate_quiz_sequence } from "@/utils/generate-quiz-sequence";

export default function Quiz() {
    const quiz_count = QUIZ_COUNT[DIFFICULTY];
    const sequence = generate_quiz_sequence();

    console.log(DIFFICULTY);
    console.log(LEVELS[DIFFICULTY]);
    console.log(sequence);
    console.log(quiz_count);

    return (
        <>
            {sequence.map((i: any) => (
                <h1>{i}</h1>
            ))}
        </>
    );
}
