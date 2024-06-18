import Image from "next/image";
import LevelButton from "@/components/project-common/level-button";

export default function Instruction() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen ">
            <div className="flex items-center justify-center w-1/2 gap-4 h-1/4">
                <div className="flex flex-col items-end justify-center w-1/2 h-full text-xl font-bold">
                    <span>? ! . ,와 같은 문장기호는 X</span>
                    <span>하지만 공백은 포함!</span>
                    <span>문제 순서는 랜덤!</span>
                </div>
                <div className=" w-[1px] h-full border border-[#7f7377]" />
                <div className="flex flex-col items-start justify-center w-1/2 h-full text-xl font-bold">
                    <span>초급: 20문제, 초성 O, 공백 O</span>
                    <span>중급: 30문제, 초성 O, 공백 X</span>
                    <span>고급: 50문제, 초성 X, 공백 X</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-20">
                <LevelButton title="초급" path="quiz" />
                <LevelButton title="중급" path="quiz" />
                <LevelButton title="고급" path="quiz" />
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
