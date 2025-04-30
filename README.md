# Webpack Template
A template for a webpack project which includes eslint and prettier.

## Pre-requisites
This template requires Node.js.  To install Node.js, use the Node Version Manager (`nvm`).

### Step 0: Install `curl`
We will use curl to install `nvm`.

```
sudo apt install curl
```

### Step 1 Install `nvm`
Use `curl` to install `nvm`.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

### Step 2: Initialize `nvm`
The instructions to initialize `nvm` should be in the terminal, but you can just execute this command:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Verify `nvm`  is installed by running this command:

```
command -v nvm
```

If this returns `nvm: command not found`, close and reopen the terminal.

### Step 3: Intall Node

```
nvm install --lts
```

### Step 4: Set the Node version
This tells `nvm` to use the long term support version.

```
nvm use --lts
```

Check the version by running this:

```
node -v
```

## After Cloning This Template
You have to install the `npm` packages after cloning this template.
```
npm install
```