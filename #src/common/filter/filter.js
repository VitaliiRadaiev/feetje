{
    let search = document.querySelector('.search');
    if(search) {
        let input = search.querySelector('.search__input');
        if(input.value.trim()) {
            search.classList.add('_hasLatter');
        }
        input.addEventListener('focus', () => {
            search.classList.add('_focus');
        })
        input.addEventListener('blur', () => {
            search.classList.remove('_focus');
        })
        input.addEventListener('input', (e) => {
            if(e.target.value.trim()) {
                search.classList.add('_hasLatter');
            } else {
                search.classList.remove('_hasLatter');
            }
        })
    }


    let filter = document.querySelector('.filter-wrap');
    if(filter) {
        let btn = document.querySelector('.filter__mob-btn');
        if(btn) {
            let closeBtn = filter.querySelector('.filter-close');

            btn.addEventListener('click', () => {
                filter.classList.add('open');
                document.body.classList.add('lock');
            })
            closeBtn.addEventListener('click', () => {
                filter.classList.remove('open');
                document.body.classList.remove('lock');
            })
        }
    }
}