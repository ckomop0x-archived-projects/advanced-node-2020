process.on('exit', code => {
  // do one final sync operation before
  // before the node process terminates
  console.log(`About to exit the code: ${code}`)
})

process.on('uncaughtException', error => {
  // something went unhandled
  // Do any cleanup and exit anyway
  console.error(`Error is here: ${error}`)

  // Force exit the process, too
  process.exit(1)
})

process.stdin.resume();

console.fog()
