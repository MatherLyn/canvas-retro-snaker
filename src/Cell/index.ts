import Color from '../Color';
import { CELL_WIDTH, CELL_HEIGHT } from '../constant';

export default class Cell {
    private width: number = CELL_WIDTH;
    private height: number = CELL_HEIGHT;
    
    constructor () {
        // @ts-ignore
        window.c = Color;
    }
}