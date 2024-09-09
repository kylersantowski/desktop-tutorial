function writeTextToFile() {
    // Your markdown content
    const markdownContent = `
# My Markdown File

# My Markdown File

## Introduction

Have you ever wondered how websites are built? In this document, we'll explore the basics of web development.

## The Importance of HTML

HTML, or Hypertext Markup Language, is the backbone of web development. It provides the structure and definition for a webpage's content.

## The Power of CSS

CSS, or Cascading Style Sheets, brings life to your creations. It's the language for styling and designing webpages.

## Unleashing the Potential of JavaScript

JavaScript adds interactivity and dynamic features. It's an essential programming language for web development.

## Essential Tools and Resources

Equip yourself with the right tools, such as a reliable code editor, version control (Git), and browser developer tools.

## Practical Tips for Mastery

Explore JavaScript libraries and frameworks. Experiment with different tools to deepen your understanding and skills.

## Take the First Step Towards Web Development Success

Immerse yourself in web development, explore various tools, and don't be afraid to make mistakes. The journey is exciting!

In conclusion, mastering the building blocks of web development is the key to unlocking a world of endless possibilities.`;

    // Convert Markdown to HTML
    const htmlContent = marked(markdownContent);

    // Display the HTML content in the 'displayArea'
    document.getElementById('displayArea').innerHTML = htmlContent;

    // Create a Blob with the content
    const blob = new Blob([markdownContent], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute and create a download link
    link.download = 'myMarkdownFile.txt';
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
}