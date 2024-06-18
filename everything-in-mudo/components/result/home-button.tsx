"use client";

import { useRouter } from "next/navigation";

interface IClickToHome {
    title: string;
}

export default function ClickToHome({ title }: IClickToHome) {
    const router = useRouter();

    function onClick() {
        router.push("/");
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
