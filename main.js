let diaryEntries = [
    {
        "date": "15.01.2024",
        "text": `Heute haben wir uns intensiv mit dem Thema "Die Grenzen meiner Sprache sind die Grenzen meiner Welt" beschäftigt und wie die Nichtexistenz unbenannter Dinge unsere Wahrnehmung prägt. Ein faszinierendes Beispiel war die Metapher von dem individuellen „Fenster“, durch das ein jeder die Welt betrachtet. Unsere Sprache wurde hier als Möglichkeit zur Vergrößerung bzw. Verkleinerung dieses Fensters präsentiert.</p><p>
        Auch die Videos über geschlechtsspezifische Sprache und wie diese unsere Denkweisen formt, die wir uns angesehen haben, war aufschlussreich. Die menschliche Fähigkeit, durch Sprache Konzepte zu erfassen, die ohne Benennung unvorstellbar wären, war ein großes und bedenkliches Thema. Fast hätte man meinen können unsere Klasse sei ein Haufen wahnsinniger Anarchisten, so wie wir wild darüber diskutiert haben, dass es keine Länder, keine Autorität und kein Geld wirklich gibt.</p><p>
        Beim anschließenden Portrait-Fotoshooting war ich nur als Model dabei, wodurch dieser Teil für mich wenig interessant oder spannend war.`,
        "important": "Sprache formt unsere Wirklichkeit mehr als ich gedacht hätte. Ich würde deshalb gerne in Zukunft mehr darauf achten wie ich und andere sich ausdrücken.",
        "surprising": 8,
        "informative": 6,
        "inspiring": 7
    },
    {
        "date": "22.01.2024",
        "text": `Der heutige Unterricht widmete sich der Körpersprache als essenzieller Form der nonverbalen Kommunikation. Wir haben viel darüber gelernt, wie sich unsere Gedanken und Gefühle in unseren Gesten widerspiegeln. Dafür haben wir uns einige überraschend unterhaltsame Video-Lektionen von einem „Körpersprachen-Guru“ angeschaut. Die Beispiele waren sehr anschaulich.</p><p>
        Auch haben wir uns damit beschäftigt, wie die Atmosphäre eines Raumes durch Licht, Raumgestaltung und Oberflächenbeschaffenheit Emotionen und Stimmungen beeinflusst. Diese Elemente sind im Storytelling essenziell, um den Charakter eines Unternehmens oder einer Person hervorzuheben. Das war für mich wenig interessant, weil ich mich schon im Jahr zuvor im Zuge eines MGG Projekts intensiv mit dem Thema und sogar den gleichen Lehrunterlagen beschäftigt habe.</p><p>
        Das heutige Fotoshooting war etwas interessanter als letzte Woche. Wir haben in der Schulbibliothek fotografiert. Ich habe tapfer meinen Mantel für die Abdunklung des Sets empor gehalten. Das war verdammt anstrengend, aber das Endresultat ist dafür echt nicht schlecht.`,
        "important": "Ich war fasziniert davon, wie viele Details unsere Körpersprache ausmachen, aber vor allem will ich versuchen, bewusster auf meine eigene Körpersprache zu achten.",
        "surprising": 5,
        "informative": 8,
        "inspiring": 9
    },
    {
        "date": "29.01.2024",
        "text": `Am heutigen Tag haben wir uns mit den Grundlagen der Audiotheorie und der Bedeutung von Schall als Indexzeichen beschäftigt. Der Fokus lag auf den grundlegenden Bausteinen eines Tons: Lautstärke, Tonhöhe und Klangfarbe. Diese Informationen waren mir größtenteils bereits bekannt, aber es war kurzweilig das alles noch einmal durchzugehen.</p><p>
        Für den praktischen Teil haben wir uns heute in Teams zusammengefunden, um ein etwas aufwendigeres Portrait zu planen. Wir haben uns dafür durch Bilder gewühlt und diese nach Ästhetik und Machbarkeit bewertet. Mithilfe von KI unterstützung haben wir versucht, unser Konzept zu visualisieren.`,
        "important": "Ein Ton kann ein ebenso effizientes Indexzeichen wie ein Bild sein.",
        "surprising": 3,
        "informative": 8,
        "inspiring": 5
    },
    {
        "date": "05.02.2024",
        "text": ``,
        "important": "Ich bin mir unsicher ob das die Message war, aber ich werde ab jetzt überlegen wie ich menschliche Instinkte dafür ausnutzen kann, um meine zukünftigen Kunden/Nutzer zu beeinflussen.",
        "surprising": 7,
        "informative": 6,
        "inspiring": 9
    },
    {
        "date": "12.02.2024",
        "text": ``,
        "important": "",
        "surprising": 0,
        "informative": 0,
        "inspiring": 0
    },
    {
        "date": "26.02.2024",
        "text": `Heute haben wir uns vor allem mit dem menschlichen Verlangen nach Macht beschäftigt und damit zum Teil an den Unterricht vom 15. Jänner angeschlossen.`,
        "important": "",
        "surprising": 7,
        "informative": 8,
        "inspiring": 10
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
        <h4>Informativ</h4>
        <div class="stat-display">
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${diaryEntries[index].informative * 10}%"></div>
            </div>
            <p>${diaryEntries[index].informative}/10</p>
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