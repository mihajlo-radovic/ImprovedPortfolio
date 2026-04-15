document.querySelectorAll('.icon-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const isActive = wrapper.classList.contains('active');
        document.querySelectorAll('.icon-wrapper').forEach(w => w.classList.remove('active'));
        if (!isActive) wrapper.classList.add('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.icon-wrapper')) {
        document.querySelectorAll('.icon-wrapper').forEach(w => w.classList.remove('active'));
    }
});