import {promises} from 'fs';

export default async function ({projectRoot, vcs, visibility}) {
  await promises.writeFile(
    `${projectRoot}/.nycrc`,
    JSON.stringify({
      extends: '@istanbuljs/nyc-config-babel',
      reporter: ['lcov', 'text-summary', 'html'],
      exclude: ['src/**/*-test.js', 'test/', 'thirdparty-wrappers/', 'vendor/']
    })
  );

  return {
    devDependencies: ['nyc', '@istanbuljs/nyc-config-babel', 'babel-plugin-istanbul'],
    vcsIgnore: {files: [], directories: ['/coverage/', '/.nyc_output/']},
    badges: {
      status: {
        ...vcs && 'GitHub' === vcs.host && 'Public' === visibility && {
          coverage: {
            img: `https://img.shields.io/codecov/c/github/${vcs.owner}/${vcs.name}.svg`,
            link: `https://codecov.io/github/${vcs.owner}/${vcs.name}`,
            text: 'Codecov'
          }
        }
      }
    }
  };
}
