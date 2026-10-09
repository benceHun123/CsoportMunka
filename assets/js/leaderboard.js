const tbody = document.getElementById('leaderboard-body');

for (let i = 0; i < 50; i++) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td class="text-center border border-gray-300">${i + 1}</td>
        <td class="border border-gray-300"></td>
        <td class="border border-gray-300"></td>
    `;
    tbody.appendChild(row);
}