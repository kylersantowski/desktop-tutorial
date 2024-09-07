function updatePreview() {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = editor.value;

  // Convert Markdown to HTML
  const html = marked(markdown, { breaks: true });

  // Sanitize the HTML
  const sanitizedHtml = DOMPurify.sanitize(html);

  // Update the preview
  preview.innerHTML = sanitizedHtml;
}

// Call updatePreview when the page loads
window.onload = updatePreview;

// Update preview as user types
document.getElementById('editor').addEventListener('input', updatePreview);
