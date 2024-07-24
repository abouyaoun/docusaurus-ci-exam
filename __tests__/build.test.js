const { exec } = require('child_process');

test('builds without errors', done => {
  exec('npm run build', (error, stdout, stderr) => {
    expect(error).toBeNull();
    done();
  });
});
