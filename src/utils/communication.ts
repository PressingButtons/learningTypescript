export interface Phrase {
    dialogue: Array<string>;
}

export function speak( phrase: Phrase ) {
    const statement = phrase.dialogue.join('\n');
    console.log( statement );
}