import {Environment} from "@test";

class ConfigService {

  public readonly isDevMode: boolean = (process.env.environment === Environment.local);

  constructor() {
    if (this.isDevMode) {
      console.debug('JAKL service.isDebugMode!');
    }
  }
}

export const configService = new ConfigService();