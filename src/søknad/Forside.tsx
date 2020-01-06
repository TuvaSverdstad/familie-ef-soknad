import React from 'react';
import { Panel } from 'nav-frontend-paneler';
import FeltGruppe from '../components/FeltGruppe';
import Språkvelger from '../components/språkvelger/Språkvelger';
import svg from '../assets/VeilederSvg';
import Veileder from 'nav-frontend-veileder';
import { BekreftCheckboksPanel } from 'nav-frontend-skjema';
import { Element, Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import { usePersonContext } from '../context/PersonContext';
import { Routes } from '../config/Routes';
import useSøknadContext from '../context/SøknadContext';
import { hentBeskjedMedNavn } from '../utils/språk';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';
import { hentNesteRoute } from '../utils/routing';
import { useLocation, useHistory } from 'react-router-dom';
import KnappBase from 'nav-frontend-knapper';
import LocaleTekst from '../language/LocaleTekst';

const Forside: React.FC<any> = ({ intl }) => {
  const { person } = usePersonContext();
  const { søknad, settSøknad } = useSøknadContext();
  const location = useLocation();
  const history = useHistory();
  const nestePath = hentNesteRoute(Routes, location.pathname);

  console.log(history);

  const onChange = () => {
    settSøknad({ ...søknad, bekreftet: !søknad.bekreftet });
  };

  return (
    <div className={'forside'}>
      <div className={'header'}>
        <div className={'banner'}></div>
        <Veileder
          storrelse={'M'}
          posisjon={'topp'}
          tekst={
            <span>
              <Element>Hei, {person.søker.forkortetNavn}!</Element>{' '}
              <Normaltekst>Velkommen til søknad om overgangsstønad</Normaltekst>
            </span>
          }
        >
          {svg}
        </Veileder>
      </div>
      <Sidetittel>Søknad om overgangsstønad</Sidetittel>
      <Språkvelger />
      <main className={'forside__innhold'}>
        <Panel className={'forside__panel'}>
          <FeltGruppe>
            <Normaltekst>
              <FormattedHTMLMessage id={'side.info.overgangsstønad'} />
            </Normaltekst>
          </FeltGruppe>
          <FeltGruppe>
            <Element>Vi stoler på deg</Element>
          </FeltGruppe>
          <FeltGruppe>
            <BekreftCheckboksPanel
              onChange={(e) => onChange()}
              checked={søknad.bekreftet ? true : false}
              label={hentBeskjedMedNavn(
                person.søker.forkortetNavn,
                intl.formatMessage({ id: 'side.bekreftelse' })
              )}
            />
          </FeltGruppe>

          {søknad.bekreftet ? (
            <FeltGruppe classname={'sentrert'}>
              <KnappBase
                onClick={() => history.push("/familie/alene-med-barn/soknad" + nestePath.path)}
                type={'hoved'}
              >
                <LocaleTekst tekst={'knapp.start'} />
              </KnappBase>
            </FeltGruppe>
          ) : null}
        </Panel>
      </main>
    </div>
  );
};

export default injectIntl(Forside);
