import { summatorTest } from './summator_test.js';

export const testStart = () => {
    mocha.setup('bdd');
    const assert = chai.assert;
    mocha.run();

    summatorTest(assert);
}

