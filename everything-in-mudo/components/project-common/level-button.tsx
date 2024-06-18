"use client";

import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { levelState } from "@/global/project-common";

interface IButton {
    title: string;
    path: string;
}

export default function LevelButton({ title, path }: IButton) {
    const router = useRouter();
    const setLevelState = useSetRecoilState(levelState);

    function onClick() {
        if (path === "quiz") {
            if (title === "초급") {
                setLevelState(0);
            } else if (title === "중급") {
                setLevelState(1);
            } else {
                setLevelState(2);
            }
        }

        router.push(`/${path}`);
    }

    return (
        <div
            onClick={onClick}
            className=" px-3 py-1.5 bg-[#7f7377] rounded-md group hover:cursor-pointer hover:bg-[#e7e8da] *:transition-all border border-[#e7e7da] hover:border-[#7f7377]"
        >
            <span className=" text-[#e7e8da] font-bold group-hover:text-[#7f7377]">
                {title}
            </span>
        </div>
    );
}
