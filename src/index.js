function Menu(e) {
    const list = document.querySelector('ul');
    const isOpen = e.name === 'menu';
    e.name = isOpen ? 'close' : 'menu';
    list.classList.toggle('top-[50px]', isOpen);
    list.classList.toggle('opacity-100', isOpen);
}