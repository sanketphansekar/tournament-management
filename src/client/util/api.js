const BASE_URL = 'http://localhost:3000';

export function getAllMatches() {
  return fetch(`${BASE_URL}/api/matches`)
    .then(response => response.json())
    .catch(error => error);
}

export function getUsers() {
  return fetch(`${BASE_URL}/api/users`)
    .then(response => response.json())
    .catch(error => error);
}
