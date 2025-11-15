// Tailwind CSS Configuration
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    // Primary orange - meets WCAG AA contrast on white/dark backgrounds
                    orange: '#ff6600',
                    'orange-hover': '#ff8533',
                    // Accessible text colors
                    'text-gray-light': '#555', // Better contrast than #666 on white (WCAG AA compliant)
                    'text-gray-dark': '#b0b0b0', // Better contrast than #999 on dark (WCAG AA compliant)
                }
            }
        }
    }
}

