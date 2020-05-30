export default class Snake {
    private length: number;
    private speed: number;
    private shape: Array<Position>;
    private direction: number;

    constructor (length: number, speed: number, shape: Array<Position>, direction: number) {
        this.length = length;
        this.speed = speed;
        this.shape = shape;
        this.direction = direction;
    }

    public grow = (): number => {
        return ++this.length;
    }

    public accelerate = (boost: number): number => {
        return this.speed += boost;
    }

    public move = (): void => {

    }
}