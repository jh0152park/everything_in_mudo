type TDifficulty = 0 | 1 | 2;

interface ILevel {
    [key: number]: string;
}

interface ICount {
    [key: number]: number;
}

export let DIFFICULTY: TDifficulty = 0;

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

export function set_quize_level(level: TDifficulty) {
    DIFFICULTY = level;
}
