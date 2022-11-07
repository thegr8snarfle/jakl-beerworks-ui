import {Environment} from "@test";

class ConfigService {

  public readonly isDevMode: boolean = (process.env.environment === Environment.local);

  public get uptappedAPIKey(): string {
    return btoa(`austin.kulp@gmail.com:${process.env.untappedAPIToken}`) ?? '';
  }

  public get mapboxAPIKey(): string {
    return process.env.mapboxAPIToken ?? '';
  }

  constructor() {
    if (this.isDevMode) {
      console.debug('JAKL service.isDebugMode!');
    }
  }
}

export const configService = new ConfigService();