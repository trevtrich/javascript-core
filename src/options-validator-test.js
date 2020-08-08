import sinon from 'sinon';
import any from '@travi/any';
import {assert} from 'chai';
import validator from './options-validator';

suite('options validator', () => {
  let validate;

  setup(() => {
    validate = sinon.stub();
  });

  test('that the validated value is returned when no violations are found', () => {
    const options = any.simpleObject();
    const value = any.simpleObject();
    validate.withArgs(options).returns({value});

    assert.equal(validator({validate}, options), value);
  });

  test('that validation errors throw', () => {
    const error = new Error();
    validate.returns({error});

    assert.throws(() => validator({validate}), error);
  });
});
