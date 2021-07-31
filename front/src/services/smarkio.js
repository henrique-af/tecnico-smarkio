import { api } from "../config/api";

const findAll = async () => {
    return await api.get('/comments')
}

const create = async (payload) => {
    return await api.post('/comments', payload)
}

const getAudio = async (payload) => {
    return await api.post('/comments/watson', payload)
}

export { findAll, create, getAudio }