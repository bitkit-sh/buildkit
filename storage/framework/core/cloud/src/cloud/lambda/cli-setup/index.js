async function handler() {
  const setupScriptContents = `if [ -n "$1" ]; then
  # Check if the directory exists
  if [ -d "storage/framework/core" ]; then
    :
  else
    if [ -d "$1" ]; then
      echo "Project $1 exists locally. Please use a different name. Bye for now."
      exit 1
    else
      git clone https://github.com/stacksjs/stacks.git $1
      cd $1
      # Run the pkgx-install script
      "./storage/framework/scripts/pkgx-install"

      echo "Project $1 has been created. Please open a new terminal, run 'bun run dev' to start the server."

      exit 1
    fi
  fi
fi

# Get the directory of the current script and go up 3 directories
PROJECT_ROOT="$(cd "$(dirname "$0")/../../../" && pwd)"

cd $PROJECT_ROOT
# Run the pkgx-install script
if [[ $* == *--verbose* ]]; then
  "./storage/framework/scripts/pkgx-install"
  # bun --bun ./storage/framework/core/buddy/src/cli.ts setup --verbose
else
  "./storage/framework/scripts/pkgx-install" > /dev/null 2>&1
  # bun --bun ./storage/framework/core/buddy/src/cli.ts setup
fi

# Create a named pipe
mkfifo /tmp/mypipe

# Run the command, send output to both the console and the pipe
bun --bun ./storage/framework/core/buddy/src/cli.ts setup | tee /tmp/mypipe &

# Read from the pipe, add timestamps, and append to the file
while IFS= read -r line; do echo "$(date '+[%Y-%m-%d %H:%M:%S]') $line"; done < /tmp/mypipe >> ./storage/logs/console.log

# Remove the named pipe
rm /tmp/mypipe
`

  return {
    statusCode: 200,
    body: setupScriptContents,
  }
}

module.exports = {
  handler,
}