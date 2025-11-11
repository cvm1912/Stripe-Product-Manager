# ⚙️ Commands

1. npm init -y
2. npm install express
3. npm install --save-dev typescript ts-node @types/node @types/express nodemon
4. npx tsc --init
5. mkdir src
6. echo "console.log('Server running')" > src/index.ts


# 🧠 tsconfig.json 

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}


# 📦 package.json

{
  "name": "my-app",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "start": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "serve": "node dist/index.js"
  },
  "dependencies": {
    "express": "^4.21.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.19",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}

# src/index.ts

import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("🚀 TypeScript + Express is running!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

# ▶️ Run the app

npm start
