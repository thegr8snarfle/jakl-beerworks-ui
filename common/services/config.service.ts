import {Environment} from "@test";

class ConfigService {

  public readonly isDevMode: boolean = (process.env.environment === Environment.local);

  constructor() {
    console.debug('JAKL service.isDebugMode => ', this.isDevMode);
  }
}

export const configService = new ConfigService();