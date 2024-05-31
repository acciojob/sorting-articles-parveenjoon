const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to sort articles while ignoring specified words
function sortArticles(articles) {
    return articles.sort((a, b) => {
        // Function to remove specified words from the beginning of the string
        const removeWords = str => str.replace(/^(the|a|an)\s+/i, '');

        // Compare articles after removing specified words
        const articleA = removeWords(a);
        const articleB = removeWords(b);
        return articleA.localeCompare(articleB);
    });
}

// Sort the articles
const sortedBands = sortArticles(bands);

// Populate the unordered list with sorted articles
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
});
