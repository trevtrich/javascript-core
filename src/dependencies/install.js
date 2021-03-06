import uniq from 'lodash.uniq';
import {info, warn} from '@travi/cli-messages';
import execa from '../../thirdparty-wrappers/execa';
import {DEV_DEPENDENCY_TYPE} from './types';

export default async function (dependencies, dependenciesType) {
  if (dependencies.length) {
    info(`Installing ${dependenciesType} dependencies`, {level: 'secondary'});

    await execa(
      `. ~/.nvm/nvm.sh && nvm use && npm install ${uniq(dependencies).join(' ')} --save-${dependenciesType}${
        DEV_DEPENDENCY_TYPE === dependenciesType ? ' --save-exact' : ''
      }`,
      {shell: true}
    );
  } else warn(`No ${dependenciesType} dependencies to install`);
}
