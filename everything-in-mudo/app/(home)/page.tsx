import Image from "next/image";
import MyButton from "@/components/project-common/my-button";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen ">
            <div className="flex items-center justify-center w-full gap-4 h-1/4 *:transition-all ">
                <div className="flex flex-col items-end justify-center w-1/2 h-full ">
                    <span className="font-bold sm:text-2xl md:text-3xl">
                        무한도전
                    </span>
                    <span className="font-bold sm:text-xl md:text-2xl">
                        Infinite Challenge
                    </span>
                </div>
                <div className=" w-[1px] h-full border border-[#7f7377]" />
                <div className="flex flex-col items-start justify-center w-1/2 h-full ">
                    <span className="font-bold sm:text-xl md:text-2xl ">
                        짤 보고 대사 맞추기!
                    </span>
                    <span className="font-bold sm:text-2xl md:text-3xl ">
                        없는게 없는 무도
                    </span>
                </div>
            </div>

            <div className="z-10 mt-20">
                <MyButton title="시작하기" redirect={true} path="instruction" />
            </div>

            <Image
                src="/resources/image/etc/members.jpeg"
                alt="members"
                className="fixed left-auto right-auto z-0 bottom-4"
                width="600"
                height="250"
                style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
        </main>
    );
}
