const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Leads App Build Process...');

const rootDir = path.resolve(__dirname, '..');
const leadsDir = path.join(rootDir, 'leads');
const publicDir = path.join(rootDir, 'public', 'leads');

try {
    // 1. Install dependencies for Leads
    console.log('📦 Installing Leads dependencies...');
    execSync('npm install', { cwd: leadsDir, stdio: 'inherit' });

    // 2. Build Leads App
    console.log('🏗️ Building Leads App...');
    execSync('npm run build', { cwd: leadsDir, stdio: 'inherit' });

    // 3. Ensure destination directory exists
    console.log('📂 Preparing public/leads directory...');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    // 4. Copy build artifacts
    console.log('📋 Copying build files to public/leads...');
    const distDir = path.join(leadsDir, 'dist');

    if (!fs.existsSync(distDir)) {
        throw new Error('Build failed: dist directory not found in leads folder');
    }

    // Helper function to copy recursively
    function copyRecursiveSync(src, dest) {
        const exists = fs.existsSync(src);
        const stats = exists && fs.statSync(src);
        const isDirectory = exists && stats.isDirectory();
        if (isDirectory) {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest);
            }
            fs.readdirSync(src).forEach(childItemName => {
                copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    }

    copyRecursiveSync(distDir, publicDir);

    console.log('✅ Leads App successfully built and integrated!');
} catch (error) {
    console.error('❌ Error during Leads build:', error.message);
    process.exit(1);
}
