// Nouvelle version de app.js (JavaScript côté client)
document.addEventListener('DOMContentLoaded', () => {
    // Chargement des matchs
    async function loadMatches() {
        try {
            const response = await fetch('matches.json');
            const matches = await response.json();
            // Logique de traitement des matchs
            displayMatches(matches);
        } catch (error) {
            console.error('Erreur de chargement des matchs:', error);
        }
    }

    // Chargement des équipes
    function loadTeams() {
        const teams = [
            { id: 1, name: '11', level: 'Niveau 1' },
            { id: 2, name: '13', level: 'Niveau 2' },
            { id: 3, name: 'SENIOR 3e DTM', level: 'Niveau 3' },
            { id: 4, name: 'SENIOR EXCELLENCE', level: 'Niveau 4' },
            { id: 5, name: '18', level: 'Niveau 5' }
        ];
        // Logique de traitement des équipes
        displayTeams(teams);
    }

    // Fonctions pour afficher les données
    function displayMatches(matches) {
        const matchesContainer = document.getElementById('matches-list');
        matches.forEach(match => {
            const matchElement = document.createElement('div');
            matchElement.textContent = `Match: ${match.team}`;
            matchesContainer.appendChild(matchElement);
        });
    }

    function displayTeams(teams) {
        const teamsContainer = document.getElementById('teams-list');
        teams.forEach(team => {
            const teamElement = document.createElement('div');
            teamElement.textContent = `Équipe: ${team.name} - ${team.level}`;
            teamsContainer.appendChild(teamElement);
        });
    }

    // Initialisation
    loadMatches();
    loadTeams();
});
