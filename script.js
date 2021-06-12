const skills = [
    {name : "Java", level : 60, css_class: "skill-java"},
    {name : "SQL", level : 60, css_class: "skill-sql"},
    {name : "HTML", level : 60, css_class: "skill-html"},
    {name : "CSS", level : 60, css_class: "skill-css"},
    {name : "C++", level : 60, css_class: "skill-cpp"},
];

function input_skills(){
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');

    skills.forEach(item => {
        const dt = document.createElement('dt');
        dt.textContent = item.name;
        dt.classList.add(item.css_class);
        const dd = document.createElement('dd');
        dd.classList.add('level');
        const div = document.createElement('div');
        div.style.width = item.level + '%';
        div.textContent = item.level;
        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    });
    document.getElementById('skills').append(dl);
}

input_skills();

