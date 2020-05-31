import Cell from '../Cell';

class Map {
    private width: number;
    private height: number;
    private canvas: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;

    constructor () {
        this.width = 929;
        this.height = 619;
        this.canvas = document.getElementById('map') as HTMLCanvasElement;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvasContext = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        

        new Cell();
    }
}

export default Map;