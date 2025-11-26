document.addEventListener('DOMContentLoaded', function() {
    
    function applyFontSize(value) {
        const articleContent = document.querySelector(".article");
        if (!articleContent) return;

        switch(value) {
            case 'small': articleContent.style.fontSize = '12px'; break;
            case 'standard': articleContent.style.fontSize = '16pxem'; break;
            case 'large': articleContent.style.fontSize = '22px'; break;
            default: articleContent.style.fontSize = '';
        } 
    }
    const fontSizeRadios = document.querySelectorAll('input[name="fontsize"]');
    if (fontSizeRadios.length) {
        const checked = document.querySelector('input[name="fontsize"]:checked');
        if (checked) applyFontSize(checked.value); 

        fontSizeRadios.forEach(radio => {
            radio.addEventListener('change', function () { 
            });
        });
    }


    const gridContainer = document.querySelector(".grid-container");
    const barWidthRadios = document.querySelectorAll('input[name="barwidth"]');
    
    function applyBarWidth(value) {
        if (!gridContainer) return; 
        switch(value) {
            case 'thin': gridContainer.style.gridTemplateColumns = '250px 1fr 300px'; break; 
            case 'wide': gridContainer.style.gridTemplateColumns = '250px 1fr 350px'; break;
            default: gridContainer.style.gridTemplateColumns = '';
        }
    }

    if (gridContainer && barWidthRadios.length) {
        const checked = document.querySelector('input[name="barwidth"]:checked'); 
        if (checked) applyBarWidth(checked.value);
        barWidthRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                applyBarWidth(this.value); 
            });
        });
    } 

    const searchForm = document.getElementById('search-form');
    
    const searchInput = document.getElementById('search-input');
    if (!searchForm || !searchInput) return;

    const allAnchors = Array.from(document.querySelectorAll('a[href]'));
    const articleLinks = allAnchors.filter(a => {
        const href = a.getAttribute('href').toLowerCase();
        return href.endsWith('.html') && !href.startsWith('http'); 
    });
    let datalist = document.getElementById('search-suggestion');
    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = 'search-suggestion';
        document.body.appendChild(datalist);
        searchInput.setAttribute('list', 'search-suggestion');
    }
    

    function rebuildDatalist() {
        datalist.innerHTML = '';
        articleLinks.forEach(a => {
            const option = document.createElement('option');
            option.value = a.textContent.trim() || a.getAttribute('href');
            datalist.appendChild(option);
        });
    }
    rebuildDatalist(); 

    searchForm.addEventListener('submit', function(e) { 
        e.preventDefault();
        const q = searchInput.value.trim().toLowerCase();
        if (!q) return;
        const match = articleLinks.find(a => {
            const text = (a.textContent || '').toLowerCase();
            const href = (a.getAttribute('href') || '').toLowerCase(); 
            return text.includes(q) || href.includes(q);
        });
        if (match) {
            window.location.href = match.getAttribute('href'); 
        }
        else {
            alert('No matching article found.'); 
        }
    });

    searchInput.addEventListener('input', function() { 
        const q = this.value.trim().toLowerCase();
        datalist.innerHTML = '';
        articleLinks.forEach(a => {
            const text = (a.textContent || a.getAttribute('href') || '').trim(); 
            if (!q || text.toLowerCase().includes(q)) {
                const option = document.createElement('option');
                option.value = text;
                datalist.appendChild(option); 
            }
        });
    });
});