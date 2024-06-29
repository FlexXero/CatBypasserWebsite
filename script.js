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
        const response = await fetch(`https://ep.goatbypassers.xyz/api/adlinks/bypass?url=${encodeURIComponent(url)}&apikey=ETHOS_4OECKG4O`);
        const data = await response.json();

        if (data.success) {
            resultMessage.textContent = 'Bypass successful:';
            bypassedLink.textContent = data.bypassedLink;
            bypassResult.classList.remove('hidden');
        } else {
            resultMessage.textContent = 'Bypass failed:';
            bypassedLink.textContent = data.error;
            bypassResult.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to bypass the link. Please try again later.');
    }
});
