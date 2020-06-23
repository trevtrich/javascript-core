import hoek from '@hapi/hoek';

export default function (schema, options) {
  const {error, value} = schema.validate(options);

  hoek.assert(!error, error);

  return value;
}
