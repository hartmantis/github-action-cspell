const core = require('@actions/core');
const cspell = require('./github-action-cspell');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = core.getInput('path');
    core.info(`Running cspell against '${path}'...`);
    const res = await cspell(path);
    core.setOutput('output', res);
  } catch (error) {
    core.setOutput('output', error.message);
    core.setFailed(error.message);
  }
}

run();
