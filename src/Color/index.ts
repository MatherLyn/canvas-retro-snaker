import { COLOR_MAP } from '../constant';

interface RGBAColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

export default class Color {
    private hex: string | null = null;
    private rgba: Array<number> | null = null;

    private constructor(type: boolean, value: string | RGBAColor) {
        
    }

    /**
     * @todo Finish this function.
     * @param hex A hex number.
     */
    static convertHex2Unary(hex: string): number {
        return 1;
    }

    static convertHex2Decimal(hex: string): number {
        let i: number = hex.length - 1;
        let pos: number = hex.length - 1 - i;
        let result: number = 0;
        try {
            while (i >= 0) {
                result += (COLOR_MAP.get(hex[i--]) as number) * Math.pow(16, pos++);
            }
        } catch (e) {
            throw new Error('This is possibly not a valid hex number.')
        }
        return result;
    }

    static newColorByHex(hexValue: string) {
        return new Color(true, hexValue);
    }

    static newColorByRGBA(rgbaValue: RGBAColor) {
        return new Color(false, rgbaValue);
    }

    static RGBA2Hex(rgbaValue: RGBAColor) {

    }

    static Hex2RGBA(hexValue: string): string | undefined {
        try {
            if (hexValue[0] === '#') {
                let red: number;
                let green: number;
                let blue: number;
                let alpha: number;
                if (hexValue.length === 4) {
                    red = Color.convertHex2Decimal(`${hexValue[1]}${hexValue[1]}`);
                    green = Color.convertHex2Decimal(`${hexValue[2]}${hexValue[2]}`);
                    blue = Color.convertHex2Decimal(`${hexValue[3]}${hexValue[3]}`);
                    return `rgb(${red}, ${green}, ${blue})`;
                } else if (hexValue.length === 7) {
                    debugger
                    red = Color.convertHex2Decimal(hexValue.slice(1, 3));
                    green = Color.convertHex2Decimal(hexValue.slice(3, 5));
                    blue = Color.convertHex2Decimal(hexValue.slice(5, 7));
                    return `rgb(${red}, ${green}, ${blue})`;
                } else if (hexValue.length === 10) {
                    red = Color.convertHex2Decimal(hexValue.slice(3, 5));
                    green = Color.convertHex2Decimal(hexValue.slice(5, 7));
                    blue = Color.convertHex2Decimal(hexValue.slice(7, 9));
                    alpha = Color.convertHex2Unary(hexValue.slice(1, 3));
                    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
                }
            } else {
                throw new Error('This is possibly not a valid hex color.');
            }
        } catch (e) {
            throw new Error('This is possibly not a valid hex color.');
        }
    }
}