const { execSync } = require('child_process');

let cspell = function (path) {
  return new Promise((resolve) => {
    const csPath = require.resolve('cspell/bin.js');
    // Even successfull cspell calls send their final status to stderr.
    // Only violations go to stdout because...?
    const cmd = `${csPath} '${path}' 2>&1`;

    try {
      resolve(execSync(cmd).toString());
    } catch (error) {
      throw new Error(error.stdout.toString());
    }
  });
};

module.exports = cspell;
