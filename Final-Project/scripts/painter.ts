import PaintExample = require('PaintExample');
import PainterDetail = require('PainterDetail');

class Painter {
    constructor(
        public name: string,
        public photo: string,
        public details: PainterDetail[] = [],
        public description: string,
        public examples: PaintExample[] = []) {
    }
}

export = Painter;