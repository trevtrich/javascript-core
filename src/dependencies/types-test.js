import {assert} from 'chai';
import {DEV_DEPENDENCY_TYPE, PROD_DEPENDENCY_TYPE} from './types';

suite('dependency types', () => {
  test('that the types match the installation flags', () => {
    assert.equal(DEV_DEPENDENCY_TYPE, 'dev');
    assert.equal(PROD_DEPENDENCY_TYPE, 'prod');
  });
});
