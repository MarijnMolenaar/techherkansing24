document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('updateAutoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Voorkom dat het formulier direct wordt verzonden

    const vraagprijsInput = document.querySelector('input[name="vraagprijs"]');
    const vraagprijsValue = vraagprijsInput.value;

    // Controleer of het veld niet leeg is en of het veld alleen cijfers bevat
    if (vraagprijsValue.trim() === '' || !/^\d+$/.test(vraagprijsValue)) {
      alert('Voer een geldige vraagprijs in. Alleen cijfers zijn toegestaan.');
      vraagprijsInput.focus(); // Zet de focus terug naar het invoerveld
    } else {
      this.submit(); // Alles is in orde, verstuur het formulier
    }
  });
});
