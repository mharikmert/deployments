// // Read data from JSON file
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'projects.json', true);
// xhr.onload = function () {
//   if (this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     createTable(data);
//   }
// }
// xhr.send();

const data = fetch('projects.json')

data.then(response => {
  return response.json();
}).then(data => {
  createTable(data);
});

// Create table dynamically
const createTable = (data) => {
  // Get table element from HTML file
  const table = document.getElementById('table');

  // Create table header row
  const header = table.createTHead().insertRow();
  const headers = ['Name', 'Description', 'Tech Stack', 'Github', 'Url', 'Status'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    const text = document.createTextNode(headerText);
    th.appendChild(text);
    header.appendChild(th);
  });

  // Create table body rows
  const tbody = table.createTBody();
  data.forEach(project => {
    const row = tbody.insertRow();
    Object.values(project).forEach((value, index) => {
      const cell = row.insertCell(index);
      if (index === 3) {
        // Create Github link
        const link = document.createElement('a');
        link.href = value;
        const img = document.createElement('img');
        img.src = './github.svg';
        img.alt = 'Github icon';
        link.appendChild(img);
        cell.appendChild(link);
      } else if (index === 4) {
        // Create URL link
        const link = document.createElement('a');
        link.href = value;
        link.textContent = value;
        link.classList.add('link');
        cell.appendChild(link);
      } else {
        // Insert text
        const text = document.createTextNode(value);
        cell.appendChild(text);
      }
    });
  });
}
