var temp = location.host.split('.').reverse();
var root_domain = temp[1] + '.' + temp[0];

if (root_domain != "sharkhascrash.com" && root_domain != "lvh.me") {
    window.location.replace("https://www.youtube.com/watch?v=yPYZpwSpKmA");
}