// got updated but still shit lmafo
const form = document.getElementById('bypassForm');
const urlInput = document.getElementById('urlInput');
const bypassResult = document.getElementById('bypassResult');
const resultMessage = document.getElementById('resultMessage');
const bypassedLink = document.getElementById('bypassedLink');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = urlInput.value.trim();
    if (url === '') {
        alert('Please enter a valid URL.');
        return;
    }

    try {
        const response = await fetch(`https://bypassi.goatbypassers.xyz/?url=${encodeURIComponent(url)}`); // thinking to update
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();

        if (data.success) {
            resultMessage.textContent = 'Bypass successful:';
            bypassedLink.textContent = data.bypassedLink;
            bypassResult.classList.remove('hidden');
        } else {
            resultMessage.textContent = 'Bypass failed:';
            bypassedLink.textContent = data.error || 'Unknown error.';
            bypassResult.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to bypass the link. Please try again later.');
    }
});
