// Projects Data Module

/**
 * Array of project objects for the homepage project directory
 */
const projects = [
    {
        title: 'panopto downloader',
        url: '/panopto-downloader',
        description: 'a chrome extension to bulk-download your lecture videos'
    },
    {
        title: 'jiujitsu bench',
        url: 'https://github.com/MatthewFeroz/jiujitsu-bench',
        description: 'a benchmark to test llm spatial reasoning and logic'
    }
];

/**
 * Renders all project cards into a container
 * Reuses renderLinkButton from data/links.js, so load that first
 * @param {string} containerId - ID of the container element to render into
 */
function renderProjects(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = projects.map(project => renderLinkButton(project)).join('');
    }
}
