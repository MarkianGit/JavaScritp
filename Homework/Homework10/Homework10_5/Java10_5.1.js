
const container = document.getElementById('sessions-container');
const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

if (sessionsList.length === 0) {
    container.innerHTML = '<li>Ви ще не відвідували головну сторінку.</li>';
} else {
    sessionsList.forEach((sessionTime, index) => {
        const li = document.createElement('li');
        li.textContent = `Візит №${index + 1}: ${sessionTime}`;
        container.appendChild(li);
    });
}
