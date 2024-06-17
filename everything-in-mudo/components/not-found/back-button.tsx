"use client";

import { useRouter } from "next/navigation";

interface IClickToBack {
    title: string;
}

export default function ClickToBack({ title }: IClickToBack) {
    const router = useRouter();

    function onClick() {
        router.back();
    }

    return (
        <span
            onClick={onClick}
            className="text-3xl font-bold transition-all hover:cursor-pointer hover:text-4xl"
        >
            {title}
        </span>
    );
}
