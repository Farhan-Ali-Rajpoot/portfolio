







export function ToggleMenu(e) {

    if (e.target.closest('#menu a')) {
        const menuSwitch = document.getElementById('menu-switch');

        if (!menuSwitch) return false;

        menuSwitch.checked = false;
        return true;
    }

    return false;
}