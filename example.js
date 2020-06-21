// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffoldUnitTesting} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Scaffold Unit Testing

(async () => {
  await scaffoldUnitTesting({
    projectRoot: process.cwd(),
    visibility: 'Public',
    vcs: {host: 'GitHub', owner: 'foo', name: 'bar'}
  });
})();
