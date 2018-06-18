export function getAllMatches() {
  return fetch('http://localhost:3000/api/matches')
    .then(response => response.json())
    .catch(error => error);
}

export function filterMatches() {}
