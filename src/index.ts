import express, { Application } from 'express';
import { validateEnv } from '@/lib/utils/validate-env';

validateEnv();

const PORT = process.env.PORT;

const app: Application = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
