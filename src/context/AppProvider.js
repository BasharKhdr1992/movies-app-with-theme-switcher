import { combineProviders } from './combineProviders';
import { ThemeProvider } from './ThemeContext';
import { ShowProvider } from './ShowContext';
import { SeasonProvider } from './SeasonContext';
import { EpisodeProvider } from './EpisodeContext';

const providers = [
  ThemeProvider,
  ShowProvider,
  SeasonProvider,
  EpisodeProvider,
];

export const AppProvider = combineProviders(providers);
