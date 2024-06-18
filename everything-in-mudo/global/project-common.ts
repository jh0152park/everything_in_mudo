import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface ILevel {
    [key: number]: string;
}

interface ICount {
    [key: number]: number;
}

export const LEVELS: ILevel = {
    0: "초급",
    1: "중급",
    2: "고급",
};

export const QUIZ_COUNT: ICount = {
    0: 20,
    1: 30,
    2: 50,
};

const { persistAtom } = recoilPersist();

export const levelState = atom<0 | 1 | 2>({
    key: "levelState",
    default: 0,
    effects_UNSTABLE: [persistAtom],
});

export const correctState = atom<number>({
    key: "correctState",
    default: 0,
});

export const quizSequenceState = atom<number[]>({
    key: "quizSequenceState",
    default: [],
    effects_UNSTABLE: [persistAtom],
});
