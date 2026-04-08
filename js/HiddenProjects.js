const tabs = document.querySelectorAll('.skillset-tab');
const projects = document.querySelectorAll('.work-section > div');

function showAll() {
    projects.forEach(project => project.classList.remove('project-hidden'));
    tabs.forEach(t => t.classList.remove('active'));
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (tab.classList.contains('active')) {
            showAll();
            return;
        }

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        projects.forEach(project => {
            if (project.dataset.category === filter) {
                project.classList.remove('project-hidden');
            } else {
                project.classList.add('project-hidden');
            }
        });
    });
});

document.addEventListener('click', () => {
    showAll();
});