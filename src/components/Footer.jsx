import logo from '../assets/Synthra-logo-inteto-no-bg-bianco.png';

const footerLinks = [
  ['App', 'https://app.synthra.org'],
  ['Docs', 'https://docs.synthra.org'],
  ['GitHub', 'https://github.com/Synthra-swap'],
  ['X', 'https://x.com/synthra_finance'],
  ['Discord', 'https://discord.gg/eesEKPRDtd'],
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-black px-4 py-10 text-white sm:px-6">
    <div className="mx-auto flex max-w-[88rem] flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <img src={logo} alt="Synthra" className="h-8 w-auto object-contain opacity-90" />
        <p className="mt-4 max-w-md text-sm leading-6 text-white/42">
          The chain-abstracted trading layer. One account, all chains, all markets.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/46">
        {footerLinks.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            {label}
          </a>
        ))}
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-[88rem] text-xs text-white/28">
      © {new Date().getFullYear()} Synthra. All rights reserved.
    </div>
  </footer>
);

export default Footer;
