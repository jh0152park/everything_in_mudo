"use client";

import { useRouter } from "next/navigation";

interface IButton {
    title: string;
    redirect?: boolean;
    path?: string;
}

export default function MyButton({
    title,
    redirect = false,
    path = "",
}: IButton) {
    const router = useRouter();

    function onClick() {
        if (!redirect) {
            return;
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
