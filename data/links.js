// Portfolio Links Data Module

/**
 * Array of link objects for portfolio/home page
 */
const portfolioLinks = [
    {
        title: 'youtube',
        url: 'https://www.youtube.com/@MattFeroz',
        description: 'professional and personal development for software engineers'
    },
    {
        title: 'sponsors',
        url: '/sponsors',
        description: 'the brands that are running ads on my youtube channel'
    },
    // Add more links here as needed
    // Example:
    // {
    //     title: 'My GitHub',
    //     url: 'https://github.com/MatthewFeroz',
    //     description: 'check out my code and projects'
    // }
];

/**
 * Renders a portfolio link button HTML element
 * @param {Object} link - Link object with title, url, description
 * @returns {string} HTML string for the link button
 */
function renderLinkButton(link) {
    // Determine if link should open in new tab (external links)
    const targetAttr = link.url.startsWith('http') ? 'target="_blank"' : '';
    
    return `
        <a href="${link.url}" ${targetAttr} class="group border-[#eee] dark:border-[#333] hover:bg-orange hover:border-orange hover:text-white relative w-full border py-5 px-6 text-center transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2">
            <span class="text-lg">${link.title}</span>
            <span class="text-[#555] dark:text-[#b0b0b0] group-hover:text-white/90 block text-sm transition-colors">${link.description}</span>
        </a>
    `;
}

/**
 * Renders all portfolio link buttons into a container
 * @param {string} containerId - ID of the container element to render into
 */
function renderPortfolioLinks(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = portfolioLinks.map(link => renderLinkButton(link)).join('');
    }
}

