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
        img.src = './assets/github.svg';
        img.alt = 'Github icon';
        link.appendChild(img);
        cell.appendChild(link);

      }
      else if (index === 4) {
        // Create URL link
        const link = document.createElement('a');
        link.href = value;
        link.textContent = value;
        link.classList.add('link');
        cell.appendChild(link);
      }

      // status 
      else if (index === 5) {
        // create status img using ./ok.svg or ./error.svg
        const img = document.createElement('img');
        img.src = value === 'ok' ? './assets/ok.svg' : './assets/error.svg';
        img.style.width = '20px';
        img.style.height = '20px';
        img.style.borderRadius = '50%';
        img.style.backgroundColor = 'lightgreen';

        if (value === '')
          img.style.display = 'none';

        cell.appendChild(img);
      }

      else {
        // Insert text
        const text = document.createTextNode(value);
        cell.appendChild(text);
      }
    });
  });
}
