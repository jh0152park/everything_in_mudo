import ClickToHome from "@/components/result/home-button";
import ShowResult from "@/components/result/show-result";
import Image from "next/image";

export default function Result() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-10 p-5">
            <ShowResult />

            <Image
                src="/resources/image/etc/congratulation.jpeg"
                alt="congratulation.jpeg"
                width="700"
                height="500"
            />

            <ClickToHome title="홈으로" />
        </div>
    );
}
