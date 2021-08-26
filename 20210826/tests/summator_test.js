import { summator } from '../src/summator.js';

export const summatorTest = (assert) => {
    describe('Summator Test', () => {
        it('Basic test. 1 + 1 === 2', () => {
            assert.equal(2, summator(1, 1));
        });
    });
}

