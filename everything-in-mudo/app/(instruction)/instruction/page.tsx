import Image from "next/image";
import MyButton from "@/components/project-common/my-button";

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
                <MyButton title="초급" redirect={true} path="quiz" />
                <MyButton title="중급" redirect={true} path="quiz" />
                <MyButton title="고급" redirect={true} path="quiz" />
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
