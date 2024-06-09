
const { writeFileSync, mkdirSync } = require('fs')
require("dotenv").config();

const targetPath = "./src/environments/environments.ts";

const envFileContent = `
export const enviroments = {
  mongodb_user: '${process.env.MONGODB_USERNAME}',
  mongodb_password: '${process.env.MONGODB_PASSWORD}',
  mongodb_db_name: '${process.env.MONGODB_NAME}',
}
`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent)