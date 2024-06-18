"use client";

import { useRecoilValue } from "recoil";
import {
    LEVELS,
    QUIZ_COUNT,
    correctState,
    levelState,
} from "@/global/project-common";

export default function ShowResult() {
    const level = useRecoilValue(levelState);
    const quiz_count = QUIZ_COUNT[level];
    const correct = useRecoilValue(correctState);

    function selectComment() {
        const ratio = Math.floor((correct / quiz_count) * 100);

        if (ratio <= 30) {
            return "무도 보기는 하셨나요...?";
        }
        if (ratio <= 50) {
            return "무도 짤로만 보셨죠...?";
        }
        if (ratio <= 80) {
            return "무도좀 보셨군요!!?";
        }
        return "아니, 이걸 다 안다구요!!!!?";
    }

    return (
        <div className=" w-full py-10 flex flex-col justify-center items-center *:font-bold text-3xl gap-5 -mb-10">
            <span>난이도: {LEVELS[level]}</span>
            <span>
                {correct} / {quiz_count}
            </span>
            <span className="text-5xl ">{selectComment()}</span>
        </div>
    );
}
