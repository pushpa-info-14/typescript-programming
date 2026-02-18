## Prerequisites

Ensure you have Node.js and npm installed on your system, as they are necessary for managing project dependencies.

## Step-by-Step Initialization

You can set up your project using a simple one-liner script, or by following the individual steps below:

### Quick Setup (One Command)

Run this command in your terminal to create a new directory, initialize **package.json**, install TypeScript, and generate the **tsconfig.json** file:

```bash
mkdir project-name && cd project-name && npm init -y && npm install --save-dev typescript && npx tsc --init
```

### Manual Setup (Individual Steps)

If you prefer to understand each step, or are adding TypeScript to an existing project, follow these instructions:

#### 1. Create a project directory and navigate into it:

```bash
mkdir project-name
cd project-name
```

#### 2. Initialize a Node.js project to create a package.json file:

```bash
npm init -y
```

##### 3. Install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

#### 4. Generate the TypeScript configuration file (tsconfig.json):

```bash
npx tsc --init
```

This file controls how the TypeScript compiler (tsc) processes your code, with options for target JavaScript version, module system, output directory, and more.

## Recommended Configuration & Best Practices

After running npx tsc --init, open the newly created tsconfig.json file to customize settings.

### Organize source code:

It's a common practice to put your source code in a src folder and compiled code in a dist or build folder. Update these options in tsconfig.json:

```json
"rootDir": "./src",
"outDir": "./dist",
```

### Enable strict checks:

For safer, more robust code, enable strict type checking:

```json
"strict": true,
```

## Writing and Compiling Code

### 1. Create your source file:

Create a directory named src and add your first TypeScript file (e.g., src/index.ts):

```bash
mkdir src
# Create the index.ts file using your preferred editor, e.g., 'touch src/index.ts'
```

### 2. Add some sample code to src/index.ts:

```typescript
// src/index.ts
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
```

### 3. Compile your project:

Run the TypeScript compiler from your project root:

```bash
npx tsc
```

This command reads your tsconfig.json file and generates the compiled JavaScript file (e.g., dist/index.js).

### 4. Run the compiled code:

```bash
node dist/index.js
```

For a smoother development workflow, use **watch mode** (npx tsc -w) to automatically recompile your code whenever you save changes. Alternatively, you can use ts-node to run TypeScript files directly without a separate compilation step.
