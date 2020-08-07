const cspell = require('./github-action-cspell');

test('succeeds on a good file', async () => {
  const res = 'CSpell: Files checked: 1, Issues found: 0 in 0 files\n';
  await expect(cspell('test/README_G*')).resolves.toBe(res);
});

test('catches violations in a bad path', async () => {
  const res = /CSpell: Files checked: 2, Issues found: 4 in 1 files/
  await expect(cspell('test/**/*.md')).rejects.toThrow(res);
});