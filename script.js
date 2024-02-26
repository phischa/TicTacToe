let fields = [
    null,
    'circle',
    null,
    'cross',
    null,
    null,
    null,
    null,
    null,
];

function init() {
    render();
}

function render() {
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        const symbol = fields[index] === 'circle' ? 'o' : (fields[index] === 'cross' ? 'x' : '');
        tableHTML += `<td>${symbol}</td>`;
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('content').innerHTML = tableHTML;
  }