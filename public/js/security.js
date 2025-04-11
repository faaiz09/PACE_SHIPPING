// Prevent right-click and image dragging
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('draggable', 'false');
    });
});

// Detect print screen attempts (limited effectiveness)
document.addEventListener('keydown', function(e) {
    if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p')) {
        alert('Screenshots are disabled on this website');
        e.preventDefault();
    }
});

// Prevent copying from sensitive pages
document.addEventListener('copy', function(e) {
    if (window.location.pathname.includes('/admin/')) {
        e.preventDefault();
        alert('Copying is disabled on this page');
    }
});

// Disable text selection on sensitive pages
if (window.location.pathname.includes('/admin/')) {
    document.styleSheets[0].insertRule(`
        body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `);
}

// Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert('Developer tools are disabled on this page');
    }
});

// Detect DevTools opening
// Check for DevTools resize
const threshold = 160;
const checkDevTools = function() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (heightThreshold || widthThreshold) {
        window.location.href = "https://web.pacemarinesolutions.com/access-denied";
    }
};
setInterval(checkDevTools, 1000);