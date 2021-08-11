import * as joi from '@hapi/joi';

export const configValidationSchema = joi.object({
  NODE_ENV: joi.string().required(),
  POSTGRES_HOST: joi.string().required(),
  POSTGRES_PORT: joi.number().default(5432).required(),
  POSTGRES_USERNAME: joi.string().required(),
  POSTGRES_PASSWORD: joi.string().required(),
  POSTGRES_DATABASE: joi.string().required(),
});
