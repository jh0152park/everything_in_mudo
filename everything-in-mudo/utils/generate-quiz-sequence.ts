function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function generate_quiz_sequence() {
    let sequence = new Array<number>(50);
    let already: { [key: number]: number } = {};

    for (let i = 1; i <= 50; i++) {
        let random = getRandomIntInclusive(1, 50);

        if (!!!already[random]) {
            already[random] = i;
            sequence[i - 1] = random;
        } else {
            i--;
        }
    }

    return sequence;
}
