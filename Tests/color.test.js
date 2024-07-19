const Color = require('../Lib/color');

test('Color class sets and gets color correctly', () => {
    const color = new Color('red');
    expect(color.getColor()).toBe('red');
    color.setColor('blue');
    expect(color.getColor()).toBe('blue');
});
