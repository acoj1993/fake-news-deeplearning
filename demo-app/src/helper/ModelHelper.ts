import * as tf from "@tensorflow/tfjs";
import {LayersModel} from "@tensorflow/tfjs";

const MAX_NO_OF_WORDS = 1606;

export async function warmupModel(model: LayersModel) {
    let warmupInput = new Array<number>(MAX_NO_OF_WORDS)
    for (let i = 0; i < MAX_NO_OF_WORDS; i++) {
        warmupInput[i] = Math.random() * 2.0 - 1.0; // random value [-1.0, 1.0)
    }

    const warmupTensor = tf.tensor(warmupInput, [1, MAX_NO_OF_WORDS], 'int32');

    try {
        await model.predict([warmupTensor]);
    } catch (e) {
        console.error(e);
    }
}

export function tokenize(message: String): Array<number> {
    const jsonDictionary = require("../../public/word_dict.json");
    let dictionary = JSON.parse(JSON.stringify(jsonDictionary));

    const parts: Array<String> = message.split(" ");
    const tokenizedMessage = Array<number>();
    for (let part of parts) {
        if (part.trim() != "") {
            let word = part.trim();
            word = word.toLowerCase();
            let index: number = 0;
            if (dictionary[word] == null) {
                index = 0;
            } else {
                index = dictionary[word];
            }
            tokenizedMessage.push(index);
        }
    }
    return tokenizedMessage;
}

export function padSequence(sequence: Array<number>): Array<number> {
    if (sequence.length > MAX_NO_OF_WORDS) {
        return sequence.slice(0, MAX_NO_OF_WORDS);

    } else if (sequence.length < MAX_NO_OF_WORDS) {
        let paddedArray = Array<number>().concat(sequence);

        let length = paddedArray.length;
        for (let i = length; i < MAX_NO_OF_WORDS; i++) {
            paddedArray.unshift(0);
        }
        return paddedArray;

    } else {
        return sequence;
    }
}
