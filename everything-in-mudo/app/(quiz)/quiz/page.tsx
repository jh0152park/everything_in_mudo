"use client";

import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { ANSWER, HINT, HINT_NO_SPACE } from "@/global/answer";
import { LEVELS, QUIZ_COUNT, levelState } from "@/global/project-common";
import { generate_quiz_sequence } from "@/utils/generate-quiz-sequence";

/*

초급: 20문제, 초성 O, 공백 O
중급: 30문제, 초성 O, 공백 X
고급: 50문제, 초성 X, 공백 X

*/

export default function Quiz() {
    const level = useRecoilValue(levelState);
    const [quiz, setQuiz] = useState<number>(1);
    const [correct, setCorrect] = useState<number>(0);
    const [sequence, setSequence] = useState<number[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const quiz_count = QUIZ_COUNT[level];
    const { register, setValue, handleSubmit } = useForm();

    // console.log(DIFFICULTY);
    // console.log(LEVELS[DIFFICULTY]);
    // console.log(sequence);
    // console.log(quiz_count);

    function onSubmit(data: FieldValues) {
        setIsSubmitted(true);
        setValue("answer", "");

        if (ANSWER[sequence[quiz - 1]] === data.answer) {
            setCorrect((prev) => prev + 1);
        }
    }

    function onNextClick() {
        if (!isSubmitted) {
            return;
        }

        setQuiz((prev) => prev + 1);
        setIsSubmitted(false);
    }

    useEffect(() => {
        setSequence(generate_quiz_sequence());
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen *:font-bold text-3xl gap-10 p-5">
            <div className="flex flex-col items-center">
                <span>난이도: {LEVELS[level]}</span>
                <span>
                    {quiz} / {quiz_count}
                </span>
            </div>

            <Image
                src={
                    isSubmitted
                        ? `/resources/image/answers/${sequence[quiz - 1]}.jpeg`
                        : `/resources/image/questions/${sequence[quiz - 1]}.jpeg`
                }
                alt={`${sequence[quiz - 1]}.question`}
                width="600"
                height="400"
                priority={true}
                placeholder="empty"
            />

            <div className="flex flex-col items-center justify-center w-full h-10 ">
                {level === 0 && <span>힌트: {HINT[sequence[quiz - 1]]}</span>}
                {level === 1 && (
                    <span>힌트: {HINT_NO_SPACE[sequence[quiz - 1]]}</span>
                )}
            </div>

            {!isSubmitted && (
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 h-12 ">
                    <input
                        className="w-full h-full px-3 py-1 bg-[#e7e8da] placeholder:text-[#7f7377] placeholder:text-center border-b-2 border-[#7f7377] focus:outline-none text-2xl placeholder:text-2xl"
                        placeholder="당신의 무도력은?!"
                        autoFocus
                        {...register("answer", { required: true })}
                    />
                </form>
            )}

            {isSubmitted && (
                <div
                    onClick={onNextClick}
                    className="w-1/2 py-1.5 text-2xl text-center rounded-md bg-[#7f7377] text-[#e7e8da] transition-all hover:cursor-pointer hover:bg-[#e7e8da] hover:text-[#7f7377] border border-[#7f7377]"
                >
                    다음 문제
                </div>
            )}
        </div>
    );
}
