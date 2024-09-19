// Function to load JSON content
function loadContent(id, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            document.getElementById(id).innerText = Object.values(data)[0];
        })
        .catch(error => console.error('Error loading content:', error));
}

// Function to load JSON styles
function loadStyles(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const styles = data;
            const styleSheet = document.getElementById('dynamic-styles');
            styleSheet.innerHTML = `
                header {
                    background-color: ${styles.header.backgroundColor};
                    color: ${styles.header.color};
                }
                main {
                    color: ${styles.main.color};
                }
                footer {
                    background-color: ${styles.footer.backgroundColor};
                    color: ${styles.footer.color};
                }
            `;
        })
        .catch(error => console.error('Error loading styles:', error));
}

// Load content into elements
loadContent('title', 'content/title.json');
loadContent('welcome', 'content/welcome.json');
loadContent('intro-title', 'content/intro-title.json');
loadContent('intro-content', 'content/intro-content.json');
loadContent('content-title', 'content/content-title.json');
loadContent('main-content', 'content/main-content.json');
loadContent('conclusion-title', 'content/conclusion-title.json');
loadContent('conclusion-content', 'content/conclusion-content.json');
loadContent('footer', 'content/footer.json');

// Load styles into elements
loadStyles('styles/header.json');
loadStyles('styles/main.json');
loadStyles('styles/footer.json');
