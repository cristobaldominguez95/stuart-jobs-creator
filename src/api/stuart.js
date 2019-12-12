import httpClient from "./http-client";

export const geocode = (address) => {
  return httpClient.post('/geocode', { address });
}

export const createJob = (pickup, dropoff) => {
  return httpClient.post('/jobs', { pickup, dropoff });
}
