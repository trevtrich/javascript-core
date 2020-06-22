// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffoldUnitTesting, scaffoldChoice} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Scaffold

(async () => {
  await scaffoldUnitTesting({
    projectRoot: process.cwd(),
    visibility: 'Public',
    vcs: {host: 'GitHub', owner: 'foo', name: 'bar'}
  });

  await scaffoldChoice(
    {foo: {scaffolder: options => options}},
    'foo',
    {bar: 'baz'}
  );
})();
