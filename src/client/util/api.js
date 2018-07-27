import axios from 'axios';

export function getAllMatches() {
  return fetch('/api/matches')
    .then(response => response.json())
    .catch(error => error);
}

export function getUsers() {
  return fetch('/api/users')
    .then(response => response.json())
    .catch(error => error);
}

export function saveMatchScores(data) {
  return axios
    .post('/api/predicted-scores', data)
    .then(response => response)
    .catch((error) => {
      throw new Error(error);
    });
}

export function saveActualMatchScores(data) {
  return axios
    .post('/api/actual-scores', data)
    .then(response => response)
    .catch((error) => {
      throw new Error(error);
    });
}
