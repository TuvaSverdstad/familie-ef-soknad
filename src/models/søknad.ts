import { IPerson } from './person';

export interface ISøknad {
  person: IPerson;
  søkerOppholderSegINorge?: boolean;
  søkerBosattINorgeSisteTreÅr?: boolean;
  søkerErFlyktning?: boolean;
  søkerHarSøktSeparasjon?: boolean;
  datoSøktSeparasjon?: Date;
  søkerGiftIUtlandet?: boolean;
  søkerSeparertEllerSkiltIUtlandet?: boolean;
  begrunnelseForSøknad?: string;
  datoEndretSamvær?: Date;
  datoFlyttetFraHverandre?: Date;
}
