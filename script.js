document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector(".article");
    const radios = document.querySelectorAll('input[name="fontsize"]');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            switch(this.value) {
                case 'small':
                    mainContent.style.fontSize = '12px';
                    break;
                case 'standard':
                    mainContent.style.fontSize = '16px';
                    break;
                case 'large':
                    mainContent.style.fontSize = '22px';
                    break;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const search_form = document.getElementById('search-form')
    const search_input = document.getElementById('search-input');
    const item_list = document.getElementById('item-list');

    if (!item_list) return;

    const items = item_list.getElementsByTagName('li');

    search_form.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    search_input.addEventListener('keyup', function() {
        const filter = this.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const text_value = items[i].textContent || items[i].innerText;
        }

        if (text_value.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        }
        else {
            items[i].style.display = "none";
        }
    });
});