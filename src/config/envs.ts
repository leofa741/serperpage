import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),//required() is a method of env-var package
 PUBLIC_DIR: get('PUBLIC_DIR').default('public').asString(),
};






