// Author: Liangchen Song
// Author URL: https://lsongx.github.io/
// License: Creative Commons Attribution 3.0 Unported
// License URL: http://creativecommons.org/licenses/by/3.0/ 

const hours = new Date().getHours()
const isNinghtTime = hours < 6 || hours > 21

// to night mode
if (isNinghtTime) {
    var r = document.querySelector(':root');
    r.style.setProperty('--bg-color', '#002b36');
    r.style.setProperty('--bg-color-highlight', '#073642');
    r.style.setProperty('--bg-color-highlight2', '#0e3e4b');
    r.style.setProperty('--text-color', '#839496');
    r.style.setProperty('--link-color', '#268ad2');
}
