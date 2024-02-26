let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle';

function init() {
    render();
}

function render() {
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            tableHTML += `<td id="cell-${index}" onclick="handleClick(${index})"></td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('content').innerHTML = tableHTML;
}

function handleClick(index) {
    if (!fields[index]) {
        fields[index] = currentPlayer;
        document.getElementById(`cell-${index}`).innerHTML = currentPlayer === 'circle' ? generateCircleSVG() : generateCrossSVG();
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
    }
}

init();

function generateCircleSVG() {
    const fillColor = '#00B0F0';
    const width = 70;
    const height = 70;
    const radius = width / 2;
    const circumference = 2 * Math.PI * radius;

    const svgCode = `
        <svg width="${width + 32}" height="${height + 32}" viewBox="0 0 ${width + 32} ${height + 32}" xmlns="http://www.w3.org/2000/svg" style="padding: 16px;">
            <circle cx="${width / 2 + 16}" cy="${height / 2 + 16}" r="${radius}" fill="none" stroke="${fillColor}" stroke-width="2"
                    stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}">
                <animate attributeName="stroke-dashoffset" from="${circumference}" to="0" dur="0.35s" begin="0s" fill="freeze" />
            </circle>
        </svg>
    `;

    return svgCode;
}

function generateCrossSVG() {
    const strokeColor = '#FFC000';
    const width = 70;
    const height = 70;
    const padding = 16;
    const svgCode = `
        <svg width="${width + padding * 2}" height="${height + padding * 2}" viewBox="0 0 ${width + padding * 2} ${height + padding * 2}" xmlns="http://www.w3.org/2000/svg" style="padding: ${padding}px;">
            <line x1="${padding}" y1="${padding}" x2="${width + padding}" y2="${height + padding}" stroke="${strokeColor}" stroke-width="2">
                <animate attributeName="x2" from="${padding}" to="${width + padding}" dur="0.35s" begin="0s" fill="freeze" />
                <animate attributeName="y2" from="${padding}" to="${height + padding}" dur="0.35s" begin="0s" fill="freeze" />
            </line>
            <line x1="${width + padding}" y1="${padding}" x2="${padding}" y2="${height + padding}" stroke="${strokeColor}" stroke-width="2">
                <animate attributeName="x2" from="${width + padding}" to="${padding}" dur="0.35s" begin="0s" fill="freeze" />
                <animate attributeName="y2" from="${padding}" to="${height + padding}" dur="0.35s" begin="0s" fill="freeze" />
            </line>
        </svg>
    `;
    return svgCode;
}