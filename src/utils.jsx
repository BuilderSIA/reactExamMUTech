export const getCards = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
}

