export function timeConverter(timestamp) {
    var a = new Date(timestamp);
    var months = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    return `${month} ${date}, ${year}`;
}