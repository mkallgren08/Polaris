<<<<<<< HEAD
//Configuration to allow 'npm start' to run both client and backend server
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);
