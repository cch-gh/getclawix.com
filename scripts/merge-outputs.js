const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Skipping ${src} (not found)`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean output directory
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Copy v1 output to out/ (v1 serves as root)
const v1Out = path.join(rootDir, "app/v1/out");
if (fs.existsSync(v1Out)) {
  console.log("Copying v1 output to out/");
  copyDir(v1Out, outDir);
}

// Copy v2 output to out/v2/
const v2Out = path.join(rootDir, "app/v2/out");
if (fs.existsSync(v2Out)) {
  console.log("Copying v2 output to out/v2/");
  copyDir(v2Out, path.join(outDir, "v2"));
}

// Create redirect index.html at root if v1 doesn't exist yet
const indexPath = path.join(outDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.log("Creating redirect to v2");
  fs.writeFileSync(
    indexPath,
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=./v2/">
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="./v2/">v2</a>...</p>
</body>
</html>`
  );
}

console.log("Merge complete!");
