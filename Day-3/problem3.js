function executeCommand(command) {
    const { exec } = require("child_process");
    exec(command, (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log(`error is: ${stderr}`);
        return;
      }
      console.log(`${stdout}`);
    });
  }
  executeCommand("ls -la");
  // Expected Output: (output of ls -la)
  
  executeCommand('echo "Hello, Node.js!"');
  // Expected Output: Hello, Node.js!