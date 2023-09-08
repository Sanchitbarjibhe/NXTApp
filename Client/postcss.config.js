const flexbugsFixes = require('postcss-flexbugs-fixes');
const reporter = require('postcss-reporter');

const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of your components and pages to ensure
    // Tailwind CSS classes are not purged from these files.
    content: [
        './src/**/*.{html,js,tsx,ts,jsx}',
        './pages/**/*.{html,js,tsx,ts,jsx}',
        './common/**/*.{html,js,tsx,ts,jsx}',
        './layouts/**/*.{html,js,tsx,ts,jsx}',
        // Add more paths if needed
    ],
    // Other purgecss options as needed
});

module.exports = {
    plugins: {

        tailwindcss: { config: './tailwindcss-config.js' },
        autoprefixer: {},
        // Add the flexbugsFixes and reporter plugins
        'postcss-flexbugs-fixes': {},
        'postcss-reporter': { clearReportedMessages: true },
        // ... other PostCSS plugins
    },
}

