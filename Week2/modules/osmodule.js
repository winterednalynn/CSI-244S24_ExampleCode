//os is used for operation system operations
//can tell you about the memory or the cpu
const os = require("os");
//get the platform
const platform = os.platform();
console.log(platform);
//we can get the architecture
const architecture = os.arch();
console.log(architecture);
//os can get you the available memory
const memory = os.freemem();
console.log(memory);