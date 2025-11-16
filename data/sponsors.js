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
        description: 'learn c++ by solving real world programming problems.'
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
            <a href="${sponsor.url}" target="_blank" class="block bg-[#fafafa] dark:bg-[#1e1e1e] border-2 border-[#eee] dark:border-[#333] rounded-lg p-5 cursor-pointer transition-[border-color,background-color] duration-300 ease-in-out h-full no-underline text-inherit hover:border-orange hover:bg-[#fff5f0] dark:hover:bg-[#2a1f17] min-h-[180px] flex items-center gap-4 overflow-hidden focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2">
                <img src="${sponsor.logo}" alt="${sponsor.name}" class="w-20 h-20 flex-shrink-0" onerror="this.style.display='none'" />
                <div class="flex flex-col flex-grow min-w-0">
                    <div class="font-semibold text-lg text-black dark:text-white mb-2 truncate">${sponsor.name}</div>
                    <div class="text-[#555] dark:text-white flex-grow min-h-[4.5rem] break-words overflow-hidden" style="text-wrap: balance;">${sponsor.description}</div>
                </div>
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

