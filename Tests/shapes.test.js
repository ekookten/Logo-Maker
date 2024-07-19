const { Circle, Triangle, Square } = require('../Lib/shapes');

test('Circle renders correctly', () => {
    const shape = new Circle('blue');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Triangle renders correctly', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square renders correctly', () => {
    const shape = new Square('blue');
    expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="blue" />');
});
