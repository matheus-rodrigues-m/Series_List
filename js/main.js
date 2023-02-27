const dropdowns = document.querySelectorAll('.dropdown');


//For each dropdown
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.dropdown-icon');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('ropdown-icon-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('dropdown-icon-rotate');
            menu.classList.remove('menu-open');
    
            options.forEach(option => {
                option.classList.remove('active');
            });
    
            option.classList.add('active');
        });
    });
});