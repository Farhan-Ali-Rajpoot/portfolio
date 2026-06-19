



const menu = document.getElementById('menu');
const menuSwitch = document.getElementById('menu-switch');

export function MenuFeature(ScrollY) {

    if (!menu || !menuSwitch) return;

    const scrollThreshold = 80;

    if (scrollY > scrollThreshold) {
        menu.classList.add('is-visible');
    } else {
        menu.classList.remove('is-visible');

        if (menuSwitch.checked) {
            menuSwitch.checked = false;
        }
    }
}
