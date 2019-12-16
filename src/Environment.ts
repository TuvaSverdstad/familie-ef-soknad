interface IEnvUrls {
  veiviserUrl: string;
  apiUrl: string;
  loginService: string;
}

const Environment = (): IEnvUrls => {
  if (window.location.hostname.indexOf('www-q0') > -1) {
    return {
      veiviserUrl: 'http://familie-ef-veiviser',
      apiUrl: 'http://familie-ef-soknad-api',
      loginService: 'https://loginservice-q.nav.no/login',
    };
  } else if (window.location.hostname.indexOf('www') > -1) {
    return {
      veiviserUrl: 'http://familie-ef-veiviser',
      apiUrl: 'http://familie-ef-soknad-api',
      loginService: 'https://loginservice.nav.no/login',
    };
  } else {
    return {
      veiviserUrl: '',
      apiUrl: 'http://localhost:8091',
      loginService: `http://localhost:8091/local/cookie`,
    };
  }
};

export default Environment;
