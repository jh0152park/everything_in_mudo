"use server";

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export async function generate_quiz_sequence() {
    let already: { [key: number]: number } = {};
    let sequence: number[] = [];

    for (let quiz = 1; quiz <= 50; quiz++) {
        let random = getRandomIntInclusive(1, 50);

        if (!!!already[random]) {
            already[random] = quiz;
            sequence.push(random);
        } else {
            quiz--;
        }
    }

    return sequence;
}
