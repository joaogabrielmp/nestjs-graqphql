import { registerAs, ConfigService } from '@nestjs/config';

export const mongooseConfig = registerAs('mongooseConfig', () => {
  const configService = new ConfigService();
  return { uri: configService.get<string>('MONGO_URI'), config: {} };
});
