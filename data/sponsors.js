// Sponsor Data Module

/**
 * Array of sponsor objects
 */
const sponsors = [
    {
        name: 'NVIDIA',
        url: 'https://developer.nvidia.com/brev',
        logo: 'https://cdn.simpleicons.org/nvidia/76B900',
        description: 'the leading company in AI computing and graphics technology.'
    },
    {
        name: 'boot.dev',
        url: 'https://www.boot.dev',
        logo: 'https://www.boot.dev/favicon.ico',
        description: 'learn backend development by building real projects.'
    },
    {
        name: 'getcracked.io',
        url: 'https://www.getcracked.io',
        logo: 'https://www.getcracked.io/favicon.ico',
        description: 'premium software and tools for developers.'
    }
];

/**
 * Renders a sponsor card HTML element
 * @param {Object} sponsor - Sponsor object with name, url, logo, description
 * @returns {string} HTML string for the sponsor card
 */
function renderSponsorCard(sponsor) {
    return `
        <div class="h-full min-w-0">
            <a href="${sponsor.url}" target="_blank" class="block bg-[#fafafa] dark:bg-[#1e1e1e] border-2 border-[#eee] dark:border-[#333] rounded-lg p-5 cursor-pointer transition-[border-color,background-color] duration-300 ease-in-out h-full no-underline text-inherit hover:border-orange hover:bg-[#fff5f0] dark:hover:bg-[#2a1f17] min-h-[180px] flex flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2">
                <div class="flex items-center gap-3 mb-3 flex-shrink-0">
                    <img src="${sponsor.logo}" alt="${sponsor.name}" class="w-10 h-10 flex-shrink-0" onerror="this.style.display='none'" />
                    <div class="font-semibold text-lg text-black dark:text-orange truncate">${sponsor.name}</div>
                </div>
                <div class="text-[#555] dark:text-[#b0b0b0] mt-1 flex-grow min-h-[4.5rem] break-words overflow-hidden" style="text-wrap: balance;">${sponsor.description}</div>
            </a>
        </div>
    `;
}

/**
 * Renders all sponsor cards into a container
 * @param {string} containerId - ID of the container element to render into
 */
function renderSponsors(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = sponsors.map(sponsor => renderSponsorCard(sponsor)).join('');
    }
}

