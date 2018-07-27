import Home from './components/Home';
import Scoreboard from './components/Scoreboard';
import ScoreEntry from './components/ScoreEntry/ScoreEntry';

export default [
  {
    key: '1',
    path: '/',
    component: Home,
    exact: true
  },
  {
    key: '2',
    path: '/scoreboard',
    component: Scoreboard,
    exact: true
  },
  {
    key: '3',
    path: '/',
    component: ScoreEntry,
    exact: true
  }
];
