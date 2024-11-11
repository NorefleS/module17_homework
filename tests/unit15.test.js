import { getPercents } from './unit15.js'

describe('test percents of number', () => {
    it('percent < 0', () => {
        const result = getPercents(-1, 100);
        expect(result).toBe("Процент не может быть меньше нуля.");
    });

    it('percent > 100', () => {
        const result = getPercents(200, 100);
        expect(result).toBe("Процент не может быть больше ста.");
    });

    it('number < 0', () => {
        const result = getPercents(10, -100);
        expect(result).toBe("Ожидается положительное число.");
    });
});