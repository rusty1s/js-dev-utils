const babel = require('../../../scripts/babel');

test('test babel', () => {
  const result = babel(['src'], { stdio: 'pipe' });

  expect(result.status).toBe(0);
  expect(result.stderr).toBe('');
  expect(result.stdout).toContain('use strict');
});
