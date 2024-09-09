document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('project-container');
    const navigationMenu = document.getElementById('navigation-menu');

    // Fetch the projects.json file
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check if there are projects
            if (data.projects && data.projects.length > 0) {
                data.projects.forEach(category => {
                    // Create a category section
                    const categorySection = document.createElement('section');
                    categorySection.classList.add('project-category');
                    
                    // Create a category title
                    const categoryTitle = document.createElement('h2');
                    categoryTitle.textContent = category.category;
                    categorySection.appendChild(categoryTitle);

                    // Create a container for the projects in this category
                    const projectList = document.createElement('ul');
                    projectList.classList.add('project-list');

                    // Loop through each project in the category
                    category.projects.forEach(project => {
                        const projectItem = document.createElement('li');
                        projectItem.classList.add('project-item');

                        // Create project link
                        const projectLink = document.createElement('a');
                        projectLink.href = project.link;
                        projectLink.textContent = project.name;
                        projectLink.classList.add('project-link');
                        projectLink.setAttribute('aria-label', project.name);

                        // Create project description
                        const projectDescription = document.createElement('p');
                        projectDescription.textContent = project.description;
                        projectDescription.classList.add('project-description');

                        // Append the link and description to the list item
                        projectItem.appendChild(projectLink);
                        projectItem.appendChild(projectDescription);

                        // Append the list item to the project list
                        projectList.appendChild(projectItem);
                    });

                    // Append the project list to the category section
                    categorySection.appendChild(projectList);

                    // Append the category section to the project container
                    projectContainer.appendChild(categorySection);
                });
            } else {
                // If no projects found, display a message
                const noProjectsMessage = document.createElement('p');
                noProjectsMessage.textContent = "No projects available.";
                projectContainer.appendChild(noProjectsMessage);
            }
        })
        .catch(error => {
            console.error('Error loading projects:', error);

            // Display error message to the user
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Error loading projects. Please try again later.";
            projectContainer.appendChild(errorMessage);
        });

    // Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('input', () => {
        const value = themeToggle.value;
        document.body.className = value === '1' ? 'light-theme' : (value === '2' ? 'dark-theme' : 'custom-theme');
    });
});
