let diaryEntries = [
    {
        "date": "08.02.2024",
        "text": "Test",
        "important": "Test",
        "surprising": 10,
        "inspiring": 0
    },
    {
        "date": "16.02.2024",
        "text": "Heute war wahrgenommene Wirklichkeit das übergeordnete Thema.",
        "important": "Jeder Mensch lebt in seiner eigenen Wirklichkeit.",
        "surprising": 5,
        "inspiring": 7
    },
];

function showOverview() {
    let content = `
        <h1>Mediengestaltung Tagebuch</h1>
        <div class="divider"></div>
        <h3>Einträge</h3>
        <ul>
    `;

    for (let i = 0; i < diaryEntries.length; i++) {
        content += `
            <li>
                <a href="#" onclick="showEntry(${i})">${diaryEntries[i].date}</a>
            </li>
        `;
    }

    content += `
        </ul>
    `;

    document.getElementById("content").innerHTML = content;
}

function showEntry(index) {
    let content = `
        <a href="#" onclick="showOverview()">Zurück</a>
        <h1>${getWeekday(diaryEntries[index].date) + ", " + diaryEntries[index].date}</h1>
        <div class="divider"></div>
        <h3>Beschreibung</h3>
        <p>${diaryEntries[index].text}</p>
        <div id="important">
            <h3>Wichtige Erkenntnisse</h3>
            <p>${diaryEntries[index].important}</p>
        </div>
        <h3>Persönliche Einordnung</h3>
        <h4>Überraschend</h4>
        <div class="stat-display">
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${diaryEntries[index].surprising * 10}%"></div>
            </div>
            <p>${diaryEntries[index].surprising}/10</p>
        </div>
        <h4>Inspirierend</h4>
        <div class="stat-display">
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${diaryEntries[index].inspiring * 10}%"></div>
            </div>
            <p>${diaryEntries[index].inspiring}/10</p>
        </div>
    `;

    document.getElementById("content").innerHTML = content;
}

function getWeekday(dateString) {
    let splitDate = dateString.split(".");
    let date = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
    let weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    return weekdays[date.getDay()];
}

showOverview();