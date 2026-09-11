const fs = require('fs');
const path = require('path');

console.log('--- Starting Svitovan Portfolio Verification ---');

// 1. Check index.html exists
const indexPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(indexPath)) {
    console.error('FAIL: index.html not found');
    process.exit(1);
}
const html = fs.readFileSync(indexPath, 'utf8');

// 2. Validate JSON-LD
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!match) {
    console.error('FAIL: No JSON-LD script tag found in index.html');
    process.exit(1);
}

try {
    const data = JSON.parse(match[1].trim());
    console.log('PASS: JSON-LD syntax valid.');
    console.log(`PASS: Found ${data['@graph'] ? data['@graph'].length : 1} structured data entities in @graph.`);
} catch (e) {
    console.error('FAIL: JSON-LD JSON.parse failed:', e.message);
    process.exit(1);
}

// 3. Verify core assets exist
const requiredAssets = [
    'style.css',
    'favicon.svg',
    'red.jpg',
    'red.webp',
    'red-352.webp',
    'red-176.webp',
    'red-352.jpg',
    'CV-Ales-Janacek.pdf',
    'CV-Ales-Janacek.md',
    'assets/euro-center-preview.webp',
    'assets/euro-center-preview.jpg',
    'assets/achatina-preview.webp',
    'assets/achatina-preview.jpg'
];

let missing = 0;
for (const file of requiredAssets) {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) {
        console.error(`FAIL: Missing required asset: ${file}`);
        missing++;
    } else {
        const stats = fs.statSync(fullPath);
        console.log(`PASS: Asset ${file} verified (${stats.size} bytes).`);
    }
}

if (missing > 0) {
    console.error(`FAIL: ${missing} asset(s) missing!`);
    process.exit(1);
}

console.log('--- All Verification Checks Passed Successfully! ---');
process.exit(0);
