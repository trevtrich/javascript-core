// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffoldUnitTesting, scaffoldChoice, installDependencies, PROD_DEPENDENCY_TYPE} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffoldUnitTesting({
    projectRoot: process.cwd(),
    frameworks: {
      Mocha: {scaffolder: () => undefined},
      Jest: {scaffolder: () => undefined}
    },
    visibility: 'Public',
    vcs: {host: 'GitHub', owner: 'foo', name: 'bar'}
  });

  await scaffoldChoice(
    {foo: {scaffolder: options => options}},
    'foo',
    {bar: 'baz'}
  );

  await installDependencies(['foo', 'bar'], PROD_DEPENDENCY_TYPE);
})();
