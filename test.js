console.log("Running tests...");

const result = 10 + 20;

if (result === 30) {
    console.log("TEST PASSED");
    process.exit(0);
    // they are more important
    // this process.exit(0) will exit the process with a success code (0), indicating that the test passed.
} else {
    console.log("TEST FAILED");
    process.exit(1);
    // this process.exit(1) will exit the process with a failure code (1), indicating that the test failed.
}