
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