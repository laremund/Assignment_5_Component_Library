
// Event listener, upon click, create a new html element
let icon = document.getElementById('icon_container');
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