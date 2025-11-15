// Reusable HTML Components Module

/**
 * Social media links configuration
 */
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/MatthewFeroz' },
    { name: 'Twitter', url: 'https://x.com/matt_feroz' },
    { name: 'Instagram', url: 'https://www.instagram.com/mattferoz_' }
];

/**
 * Renders the footer component with social links and theme toggle
 * @param {Object} options - Footer configuration options
 * @param {boolean} options.showSponsorLink - Whether to show the sponsor link
 * @param {string} options.sponsorLinkText - Text for the sponsor link
 * @returns {string} HTML string for the footer
 */
function renderFooter(options = {}) {
    const { showSponsorLink = false, sponsorLinkText = 'learn more here' } = options;
    
    let sponsorLinkHTML = '';
    if (showSponsorLink) {
        sponsorLinkHTML = `
            <p class="text-[#555] dark:text-[#b0b0b0]">
                Interested in sponsoring? <a href="/sponsor-me" class="text-orange hover:text-orange-hover hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2">${sponsorLinkText}</a>
            </p>
        `;
    }
    
    const socialLinksHTML = socialLinks.map(link => 
        `<a href="${link.url}" target="_blank" class="text-orange hover:text-orange-hover hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2">${link.name}</a>`
    ).join('\n            ');
    
    return `
        <div class="mt-16 pt-8 border-t border-[#eee] dark:border-[#333] no-border-transition text-center">
            ${sponsorLinkHTML}
            
            <div class="mt-5 flex items-center justify-center gap-4 flex-wrap">
                ${socialLinksHTML}
                <a href="#" onclick="toggleTheme(); return false;" class="text-orange hover:text-orange-hover hover:underline transition-colors flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2" aria-label="Toggle theme">
                    <svg id="theme-icon" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path id="theme-icon-path" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                    <span id="theme-text">Light Mode</span>
                </a>
            </div>
        </div>
    `;
}

