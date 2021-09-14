{
    let historyText = document.querySelector('.our-history__text');
    let historyBtn = document.querySelector('.our-history__see-more-btn');
    if(historyText && historyBtn) {
        console.log(historyText.scrollHeight);
        if(historyText.scrollHeight <= 207) {
            historyText.classList.remove('white-shadow');
            historyText.style.height = 'auto';
            historyBtn.style.display = 'none';
        } else {
            const getTextHeight = () => historyText.scrollHeight;

            let height = getTextHeight();
            let word = historyBtn.dataset.word;
            let text = historyBtn.innerText;

            window.addEventListener('resize', () => {
                height = getTextHeight();

                if(historyText.classList.contains('is-open')) {
                    historyText.style.height = height + 'px';
                }
            })

            historyBtn.addEventListener('click', () => {
                if(!historyBtn.classList.contains('is-open')) {
                    historyText.style.height = height + 'px';
                    historyBtn.classList.add('is-open');
                    historyText.classList.add('is-open');
                    historyBtn.innerText = word;
                    historyText.classList.remove('white-shadow');

                } else {
                    historyText.style.height = '207px';
                    historyBtn.classList.remove('is-open');
                    historyBtn.innerText = text;
                    historyText.classList.add('white-shadow');
                    historyText.classList.remove('is-open');
                }
            })
        }
    }

}