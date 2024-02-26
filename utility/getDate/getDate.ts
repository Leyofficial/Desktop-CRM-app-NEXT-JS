export function getDate() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate(); // Заменил getDay на getDate, чтобы получить день месяца
    const year = date.getFullYear();

    return `${day} : ${month} : ${year}`;
}