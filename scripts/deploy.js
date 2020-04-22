const ghPages = require('gh-pages');
const packageJson = require('../package.json');

console.info('deploying to ' + packageJson.repository);

ghPages.publish(
  'build',
  {
    repo: packageJson.repository,
  },
  (err) => {
    console.error(err);
  },
);

// Not sure why but following this tutorial doesn't work:
// https://medium.com/@Keithweaver_/setting-up-github-actions-for-a-react-app-on-github-pages-f66b28c312ac
//
// It's said that by installing the 'gh-pages' package, we'll be able to access the 'gh-pages' command line utility, but for some reason I don't have it.
// https://github.com/tschaub/gh-pages#command-line-utility
