export class Article {
    constructor(public id: number, public fake: boolean, public title: string, public text: string, public imageUrl: string, public predicted: boolean, public predictedFake: boolean) {
    }
}
