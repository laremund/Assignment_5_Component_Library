
// Navigation Drawer
let icon = document.getElementById('nav_drawer_icon_container');
let drawer = document.getElementById('drawer');

let hidden = true;
icon.addEventListener('click', (e) => {
    if (hidden) {
        drawer.animate(
            [{
                transform: `translate(${e.offsetX + 205}px)`
            }],
            {
                duration: 100,
                fill: 'forwards'
            }
        )
        hidden = false;
    } else {
        drawer.animate(
            [{
                transform: `translate(${e.offsetX - 205}px)`
            }],
            {
                duration: 100,
                fill: 'forwards'
            }
        )
        hidden = true;
    }
});

// Loading Spinner 3 (Loading...)
let loading = document.getElementById('dynamic_text');

let loadingAnimate = () => {
    let loadingStr = loading.textContent;
    if (loadingStr == 'Loading') {
        loading.innerHTML = `<div id="dynamic_text">Loading.</div>`;
    } else if (loadingStr == 'Loading.') {
        loading.innerHTML = `<div id="dynamic_text">Loading..</div>`;
    } else if (loadingStr == 'Loading..') {
        loading.innerHTML = `<div id="dynamic_text">Loading...</div>`;
    } else {
        loading.innerHTML = `<div id="dynamic_text">Loading</div>`;
    }
}

setInterval(loadingAnimate, 300);