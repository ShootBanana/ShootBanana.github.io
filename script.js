document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            loadRoster(data.roster);
            loadResults(data.results);
            loadSchedule(data.schedule);
        })
        .catch(error => console.error("Error loading data:", error));
});

function loadRoster(roster) {
    const rosterDiv = document.getElementById("players");
    rosterDiv.innerHTML = "";
    roster.forEach(player => {
        const playerItem = document.createElement("p");
        playerItem.textContent = `#${player.number} ${player.name} - ${player.position}`;
        rosterDiv.appendChild(playerItem);
    });
}

function loadResults(results) {
    const resultsDiv = document.getElementById("game-results");
    resultsDiv.innerHTML = "";
    results.forEach(game => {
        const resultItem = document.createElement("p");
        resultItem.textContent = `${game.opponent}: ${game.score} (${game.outcome})`;
        resultsDiv.appendChild(resultItem);
    });
}

function loadSchedule(schedule) {
    const scheduleDiv = document.getElementById("schedule");
    scheduleDiv.innerHTML = "";
    schedule.forEach(game => {
        const scheduleItem = document.createElement("p");
        scheduleItem.textContent = `${game.date} - ${game.opponent} at ${game.time}`;
        scheduleDiv.appendChild(scheduleItem);
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
