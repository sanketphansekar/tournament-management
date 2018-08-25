import Home from './components/Home';
import Scoreboard from './components/Scoreboard';
import ScoreEntry from './components/ScoreEntry/ScoreEntry';
import AppLayout from './components/AppLayout';

export default [
  {
    component: AppLayout,
    routes: [
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
        path: '/score-entry',
        component: ScoreEntry,
        exact: true
      }
    ]
  }
];
