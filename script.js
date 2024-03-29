async function fetchSloka() {
    try {
        const chapterNumber = document.getElementById('chapter').value;
        const verseNumber = document.getElementById('verse').value;

        const response = await fetch(`https://bhagavadgitaapi.in/slok/${chapterNumber}/${verseNumber}/`);
        const data = await response.json();


        if (data && data.slok && data.tej && data.tej.author && data.tej.ht) {
            const sloka = data.slok;
            const translation = `${data.tej.author}: ${data.tej.ht}`;


            document.getElementById('slokaContainer').innerHTML = `
                <p><strong>Sloka:</strong> ${sloka}</p>
                <p><strong>Translation:</strong> ${translation}</p>
            `;
        } else {
            throw new Error('Invalid API response structure');
        }
    } catch (error) {
        console.error('Error fetching sloka:', error.message);
        document.getElementById('slokaContainer').innerHTML = '<p>Error fetching sloka</p>';
    }
}