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
        title: 'how ai works',
        url: 'https://howaiworks.io',
        description: 'open source interactive ai education — learn how ai works by doing'
    },
    {
        title: 'jiujitsu bench',
        url: 'https://github.com/MatthewFeroz/jiujitsu-bench',
        description: 'a benchmark to test llm spatial reasoning and logic'
    },
    {
        title: 'benchmark atlas',
        url: 'https://github.com/MatthewFeroz/ai-benchmark-hub',
        description: 'a directory of ai benchmarks'
    },
    {
        title: 'contentcode',
        url: 'https://github.com/MatthewFeroz/contentcode',
        description: 'an ai agent for content creation'
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
