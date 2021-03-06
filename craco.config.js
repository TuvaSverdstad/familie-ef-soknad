const CracoLessPlugin = require('craco-less');
const norskeOrdMedÆØÅ = [
  'ISpørsmål',
  'ISøknad',
  'JaNeiSpørsmål',
  'Språk',
  'SpråkContext',
  'SpråkProvider',
  'Språkvelger',
  'Spørsmål',
  'SpørsmålContext',
  'SpørsmålProvider',
  'Søknad',
  'Søknadsdialog',
  'MultiSvarSpørsmål',
  'CheckboxSpørsmål',
  'Søknadsbegrunnelse',
  'LeggTilBarnUfødt',
  'LeggTilBarnFødt',
  'SøkerSkalFlytteSammenEllerFåSamboer',
  'EndringISamvær',
  'NårFlyttetDereFraHverandre',
  'SøkerErGift',
  'SøkerHarSøktSeparasjon',
  'HjemmeMedBarnUnderEttÅr',
  'StyledCheckboxSpørsmål',
  'StyledMultisvarSpørsmål',
  'StyledJaNeiSpørsmål',
  'HarSøkerSluttdato',
  'HvordanPraktiseresSamværet',
  'BostedOgSamvær',
  'Arbeidssøker',
  'NårSkalDuVæreElevEllerStudent',
  'SøkerSkalJobbeDeltid',
  'ErUtdanningenPåHeltidEllerDeltid',
  'SøkerErSyk',
  'SøktBarnepassOgVenterPåSvar',
  'BarnMedSærligeBehov',
  'FåttJobbTilbud',
  'SøkerSkalTaUtdanning',
  'NårSøkerDuOvergangsstønadFra',
  'HarSøkerSagtOppEllerRedusertStilling',
];

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  eslint: {
    enable: true,
    mode: 'extends',
    configure: {
      extends: 'react-app',
      rules: {
        // Det er en bug i denne sjekken som automatisk feiler på ÆØÅ: https://github.com/yannickcr/eslint-plugin-react/issues/1654
        'react/jsx-pascal-case': [
          'warn',
          {
            allowAllCaps: true,
            ignore: norskeOrdMedÆØÅ,
          },
        ],
      },
    },
  },
};
