// Used for 'postedOn' in db.
const postedOn = () => {
    const date = new Date();
    const day = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const dateTime = day + ' ' + time;
    return dateTime;
}

export default postedOn;