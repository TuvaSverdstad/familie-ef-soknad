export interface IPerson {
  søker: ISøker;
  barn: IBarn[];
}

export interface ISøker {
  fnr: string;
  forkortetNavn: string;
  adresse: IAdresse;
  egenansatt: boolean;
  innvandretDato?: string;
  utvandretDato?: string;
  oppholdstillatelse?: string;
  sivilstand: string;
  språk: string;
  statsborgerskap: string;
  privattelefon?: string;
  mobiltelefon?: string;
  jobbtelefon?: string;
  bankkontonummer?: string;
}

export interface IAdresse {
  adresse: string;
  adressetillegg: string;
  kommune: string;
  postnummer: string;
}

export interface IBarn {
  id?: string;
  alder: number;
  fnr: string;
  fødselsdato: string;
  personnummer?: string;
  harSammeAdresse: boolean;
  navn: string;
  ufødt?: boolean;
  lagtTil?: boolean;
  skalBarnBoHosDeg?: string;
  forelder?: IForelder;
}

export interface IPersonDetaljer {
  navn?: string;
  fødselsdato?: Date;
  fødselsnummer?: string;
}

export interface IForelder {
  navn?: string;
  skalBarnBoHosDeg?: string;
  fødselsdato?: Date | null;
  personnr?: string;
  borINorge?: boolean;
  avtaleOmDeltBosted?: boolean;
  harAnnenForelderSamværMedBarn?: string;
  harDereSkriftligSamværsavtale?: string;
  hvordanPraktiseresSamværet?: string;
  borISammeHus?: string;
  boddSammenFør?: boolean;
  flyttetFra?: Date | null;
  hvorMyeSammen?: string;
}
