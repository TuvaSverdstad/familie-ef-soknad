import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Normaltekst } from 'nav-frontend-typografi';
import LocaleTekst from '../../language/LocaleTekst';
import FeltGruppe from '../FeltGruppe';
import useSøknadContext from '../../context/SøknadContext';
import KalenderIkonSVG from '../../assets/KalenderSVG';

export enum DatoBegrensning {
  AlleDatoer = 'AlleDatoer',
  FremtidigeDatoer = 'FremtidigeDatoer',
  TidligereDatoer = 'TidligereDatoer',
}

interface Props {
  tekstid: string;
  datobegrensning: DatoBegrensning;
}

const Datovelger: React.FC<Props> = ({ tekstid }) => {
  const { søknad, settSøknad } = useSøknadContext();
  const valgtDato = søknad.datoSøktSeparasjon;
  const dagensDato = new Date();

  const settDato = (date: Date | null): void => {
    date !== null && settSøknad({ ...søknad, datoSøktSeparasjon: date });
  };

  return (
    <div className={'datovelger'}>
      <FeltGruppe>
        <Normaltekst>
          <LocaleTekst tekst={tekstid} />
        </Normaltekst>
        <label className={'datovelger__wrapper'}>
          <div className={'datepicker__container'}>
            <DatePicker
              onChange={(e) => settDato(e)}
              selected={valgtDato !== undefined ? valgtDato : dagensDato}
              dateFormat={'dd.MM.yyyy'}
              className={'datovelger__input'}
            />
          </div>
          <div className={'ikon__wrapper'}>
            <KalenderIkonSVG />
          </div>
        </label>
      </FeltGruppe>
    </div>
  );
};

export default Datovelger;
