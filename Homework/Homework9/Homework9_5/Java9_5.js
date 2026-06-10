let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','python core','python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    
    const Div = document.createElement('div');
    Div.classList.add('course');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = course.title;
    
    const durationDiv = document.createElement('div');
    durationDiv.classList.add('duration');
    
    const monthDiv = document.createElement('div');
    monthDiv.innerText = `Month duration: ${course.monthDuration}`;
    
    const hourDiv = document.createElement('div');
    hourDiv.innerText = `Hour duration: ${course.hourDuration}`;
    
    durationDiv.append(monthDiv, hourDiv);
    
    const ul = document.createElement('ul');
    ul.classList.add('modules');
    
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    
    Div.append(titleDiv, durationDiv, ul);
    
    document.body.appendChild(Div);
}


//////////////////////
