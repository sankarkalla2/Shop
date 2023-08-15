import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2E4NGJhNWRkMGVhMmViNDljOWMyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjAwMTgwNSwiZXhwIjoxNjkyMjYxMDA1fQ.iTvGDyj-uIkRc-hicp5cJXGQkhXtcB_JrHuMIKpgzFo"
const BASE_URL = "http://localhost:5000/api/v1"

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
})