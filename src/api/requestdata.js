/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
import axios from 'axios'
axios.defaults.baseURL = 'https://autumnfish.cn'

export function getSlider (type) {
  type = type || 0
  return axios.get(`/banner?type=${type}`)
}

export function getSongList (limit) {
  limit = limit || 30
  return axios.get(`/personalized?limit=${limit}`)
}
