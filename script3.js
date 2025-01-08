const scoreBody = document.getElementById('scoreBody');
const winScoreSelect = document.getElementById('winScore');

let scores = [0, 0, 0, 0];
let players = ["Player 1", "Player 2", "Player 3", "Player 4"];

function syncTableNames() {
    for (let i = 1; i <= 4; i++) {
        const nameElement = document.getElementById(`name${i}`);
        players[i - 1] = nameElement.innerText; // Update nama pemain di array
    }
}

// Tambahkan event listener untuk perubahan nama
for (let i = 1; i <= 4; i++) {
    const nameElement = document.getElementById(`name${i}`);
    nameElement.addEventListener('input', syncTableNames);
}

function addScore() {
    let inputScores = [
        parseInt(document.getElementById("scoreInput1").value) || 0,
        parseInt(document.getElementById("scoreInput2").value) || 0,
        parseInt(document.getElementById("scoreInput3").value) || 0,
        parseInt(document.getElementById("scoreInput4").value) || 0
    ];

    for (let i = 0; i < scores.length; i++) {
        scores[i] += inputScores[i];
    }

    let newRow = document.createElement("tr");
    inputScores.forEach(score => {
        let cell = document.createElement("td");
        cell.innerText = score;
        newRow.appendChild(cell);
    });
    scoreBody.appendChild(newRow);

    for (let i = 0; i < scores.length; i++) {
        document.getElementById(`total${i + 1}`).innerText = scores[i];
    }

    document.getElementById("scoreInput1").value = "";
    document.getElementById("scoreInput2").value = "";
    document.getElementById("scoreInput3").value = "";
    document.getElementById("scoreInput4").value = "";

    checkWin();
}

function checkWin() {
    const winScore = parseInt(winScoreSelect.value);
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= winScore) {
            alert(`${players[i]} wins!`);
            resetGame();
            break;
        }
    }
}

function resetGame() {
    scores = [0, 0, 0, 0];
    scoreBody.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        document.getElementById(`total${i + 1}`).innerText = "TOTAL";
    }
}

function updateScoreInfo() {
    let maxScore = Math.max(...scores);
    let minScore = Math.min(...scores);
    let maxIndex = scores.indexOf(maxScore);
    let minIndex = scores.indexOf(minScore);

    document.getElementById("highestScoreName").innerText = players[maxIndex];
    document.getElementById("lowestScoreName").innerText = players[minIndex];
}

// Panggil fungsi ini setiap kali skor diperbarui
function addScore() {
    let inputScores = [
        parseInt(document.getElementById("scoreInput1").value) || 0,
        parseInt(document.getElementById("scoreInput2").value) || 0,
        parseInt(document.getElementById("scoreInput3").value) || 0,
        parseInt(document.getElementById("scoreInput4").value) || 0
    ];

    for (let i = 0; i < scores.length; i++) {
        scores[i] += inputScores[i];
    }

    let newRow = document.createElement("tr");
    inputScores.forEach(score => {
        let cell = document.createElement("td");
        cell.innerText = score;
        newRow.appendChild(cell);
    });
    scoreBody.appendChild(newRow);

    for (let i = 0; i < scores.length; i++) {
        document.getElementById(`total${i + 1}`).innerText = scores[i];
    }

    document.getElementById("scoreInput1").value = "";
    document.getElementById("scoreInput2").value = "";
    document.getElementById("scoreInput3").value = "";
    document.getElementById("scoreInput4").value = "";

    updateScoreInfo(); // Perbarui nama skor tertinggi dan terendah
    checkWin();
}

function syncPlayerNames() {
    for (let i = 1; i <= 4; i++) {
        const nameElement = document.getElementById(`name${i}`); // Nama di tabel atas
        const headerElement = document.getElementById(`header${i}`); // Nama di tabel bawah

        // Perbarui nama di tabel bawah saat tabel atas diubah
        if (nameElement && headerElement) {
            headerElement.innerText = nameElement.innerText;
        }
    }
}

// Tambahkan event listener untuk perubahan nama
for (let i = 1; i <= 4; i++) {
    const nameElement = document.getElementById(`name${i}`);
    if (nameElement) {
        nameElement.addEventListener('input', syncPlayerNames);
    }
}



function checkOvertaken() {
    let maxScore = Math.max(...scores); // Cari skor tertinggi saat ini

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < maxScore && scores[i] > 0) {
            // Jika skor pemain lebih kecil dari skor tertinggi dan tidak negatif
            scores[i] = 0; // Setel skornya menjadi nol
        }
    }
}
