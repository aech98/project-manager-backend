import { cleanEnv, port, str } from 'envalid';

export function validateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
      default: 'development',
    }),
    PORT: port({ default: 3333 }),
  });
}
