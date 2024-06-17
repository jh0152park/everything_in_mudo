import MyButton from "@/components/project-common/my-button";
import Image from "next/image";

export default function Home() {
    return (
        <main className=" w-full h-screen flex flex-col justify-center items-center">
            <div className=" w-1/2 h-1/4 flex justify-center items-center gap-4">
                <div className=" w-1/2 h-full flex flex-col items-end justify-center">
                    <span className=" text-3xl font-bold">무한도전</span>
                    <span className=" text-xl font-bold">
                        Infinite Challenge
                    </span>
                </div>
                <div className=" w-[1px] h-full border border-[#7f7377]" />
                <div className=" w-1/2 h-full flex flex-col items-start justify-center">
                    <span className=" text-xl font-bold">
                        짤 보고 대사 맞추기!
                    </span>
                    <span className=" text-3xl font-bold">
                        없는게 없는 무도
                    </span>
                </div>
            </div>

            <div className=" mt-20">
                <MyButton title="시작하기" />
            </div>

            <Image
                src="/resources/image/etc/members.jpeg"
                width="500"
                height="200"
                alt="members"
                className=" fixed bottom-4 left-auto right-auto"
                style={{
                    objectFit: "cover",
                }}
            />
        </main>
    );
}
