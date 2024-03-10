let diaryEntries = [
    {
        "date": "16.02.2024",
        "text": "Test"
    }
];

function showOverview() {
    let content = `
        <h1>Mediengestaltung Tagebuch</h1>
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
        <h1>${diaryEntries[index].date}</h1>
        <p>${diaryEntries[index].text}</p>
    `;

    document.getElementById("content").innerHTML = content;
}

showOverview();