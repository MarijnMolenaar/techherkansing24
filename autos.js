document.addEventListener('DOMContentLoaded', function() {
    fetch('/autos.autos.json')
        .then(response => response.json())
        .then(autos => {
            const autosList = document.getElementById('autos-list');
            autos.forEach(auto => {
                const li = document.createElement('li');
                li.textContent = `${auto.name} - Bouwjaar: ${auto.bouwjaar} - Kilometerstand: ${auto.kilometerstand} - Vraagprijs: €${auto.vraagprijs}`;
                autosList.appendChild(li);
            });
        })
        .catch(error => console.error('Fout bij het ophalen van auto\'s:', error));
  });