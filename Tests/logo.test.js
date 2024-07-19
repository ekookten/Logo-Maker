const Logo = require('../Lib/logo');
const fs = require('fs');

jest.mock('fs');

test('Logo generates correct SVG content', () => {
    const logo = new Logo('SVG', 'white', 'Circle', 'green');
    const svgContent = logo.generateSVG();
    expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
    expect(svgContent).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
});

test('Logo saves file correctly', () => {
    const logo = new Logo('SVG', 'white', 'Circle', 'green');
    logo.saveToFile('test.svg');
    expect(fs.writeFileSync).toHaveBeenCalledWith('test.svg', expect.any(String));
});
