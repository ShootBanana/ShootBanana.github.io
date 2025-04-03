document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            populateRoster(data.roster);
            populateResults(data.results);
            populateSchedule(data.schedule);
        });
});

function populateRoster(roster) {
    const rosterDiv = document.getElementById("players");
    rosterDiv.innerHTML = "";
    roster.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.className = "player-card";
        playerCard.innerHTML = `<strong>#${player.number} ${player.name}</strong> - ${player.position}`;
        rosterDiv.appendChild(playerCard);
    });
}

function populateResults(results) {
    const resultsTable = document.querySelector("#game-results tbody");
    resultsTable.innerHTML = "";
    results.forEach(game => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${game.date}</td><td>${game.opponent}</td><td>${game.score}</td><td>${game.outcome}</td>`;
        resultsTable.appendChild(row);
    });
}

function populateSchedule(schedule) {
    const scheduleList = document.getElementById("schedule-list");
    scheduleList.innerHTML = "";
    schedule.forEach(game => {
        const listItem = document.createElement("li");
        listItem.textContent = `${game.date} - ${game.opponent} (${game.location})`;
        scheduleList.appendChild(listItem);
    });
}

function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");
    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}
