export const setData = (entityName, data) =>
    localStorage.setItem(entityName, JSON.stringify(data));

export const getData = (entityName) =>
    JSON.parse(localStorage.getItem(entityName));