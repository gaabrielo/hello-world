export function CreativeCommons() {
  return (
    <span style={{ color: 'rgba(255,255,255, 0.2)' }}>
      <a href="https://gabrielo.xyz">Portfolio</a> © 2025 by{' '}
      <a href="https://www.linkedin.com/in/gaabrielo/" target="_blank">
        Gabriel Dias Mendonça
      </a>{' '}
      is licensed under{' '}
      <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
      <img
        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
        alt=""
        style={{
          maxWidth: '1em',
          maxHeight: '1em',
          marginLeft: '.2em',
          display: 'inline',
        }}
      />
      <img
        src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
        alt=""
        style={{
          maxWidth: '1em',
          maxHeight: '1em',
          marginLeft: '.2em',
          display: 'inline',
        }}
      />
      <img
        src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
        alt=""
        style={{
          maxWidth: '1em',
          maxHeight: '1em',
          marginLeft: '.2em',
          display: 'inline',
        }}
      />
    </span>
  );
}
