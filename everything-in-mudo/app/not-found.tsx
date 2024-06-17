import ClickToBack from "@/components/not-found/back-button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-5 text-3xl font-bold">
            <span>Opps!!</span>
            <span>Something went wrong 🫠</span>
            <span>Probably you tried visit to not a valid page!! 😒</span>
            <ClickToBack title="Click to back!" />
        </div>
    );
}
