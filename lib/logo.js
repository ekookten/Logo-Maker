const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

class Logo {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        let shape;
        switch (this.shape) {
            case 'Circle':
                shape = new Circle(this.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(this.shapeColor);
                break;
            case 'Square':
                shape = new Square(this.shapeColor);
                break;
        }

        const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;

        return svgContent;
    }

    saveToFile(fileName) {
        const svgContent = this.generateSVG();
        fs.writeFileSync(fileName, svgContent);
        console.log(`Generated ${fileName}`);
    }
}

module.exports = Logo;
