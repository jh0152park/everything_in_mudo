import Image from "next/image";
import MyButton from "@/components/project-common/my-button";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen ">
            <div className="flex items-center justify-center w-1/2 gap-4 h-1/4">
                <div className="flex flex-col items-end justify-center w-1/2 h-full ">
                    <span className="text-3xl font-bold ">무한도전</span>
                    <span className="text-xl font-bold ">
                        Infinite Challenge
                    </span>
                </div>
                <div className=" w-[1px] h-full border border-[#7f7377]" />
                <div className="flex flex-col items-start justify-center w-1/2 h-full ">
                    <span className="text-xl font-bold ">
                        짤 보고 대사 맞추기!
                    </span>
                    <span className="text-3xl font-bold ">
                        없는게 없는 무도
                    </span>
                </div>
            </div>

            <div className="mt-20 ">
                <MyButton title="시작하기" redirect={true} path="instruction" />
            </div>

            <Image
                src="/resources/image/etc/members.jpeg"
                width="500"
                height="200"
                alt="members"
                className="fixed left-auto right-auto bottom-4"
                style={{
                    objectFit: "cover",
                }}
            />
        </main>
    );
}
