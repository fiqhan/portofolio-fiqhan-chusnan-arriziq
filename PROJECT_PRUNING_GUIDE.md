# Project Pruning Guide for Production-Readiness
## Next.js Portfolio + Flutter AR Project (P2MW 2026)

---

## Executive Summary

Based on your project audit, I've identified several optimization opportunities:

| Area | Status | Action Required |
|------|--------|-----------------|
| Unused Components | ✅ Good | Minimal cleanup needed |
| Unused Dependencies | ⚠️ Review | Run depcheck |
| Unused Assets | ⚠️ Critical | `public/models/` is empty |
| Build Artifacts | ⚠️ Cleanup | Clear before build |

---

# 1. Unused Code & Components Detection

## Recommended Tools

### Option A: Knip (Recommended - Modern & Fast)

```bash
# Install knip
npm install -D knip

# Run knip to detect unused code
npx knip
```

**Knip** detects:
- Unused files, dependencies, and exports
- Unlisted dependencies (used but not in package.json)
- Unused TypeScript types

### Option B: depcheck (Traditional)

```bash
# Install depcheck
npm install -D depcheck

# Run dependency check
npx depcheck
```

### Option C: ESLint with unused-imports rule

```bash
# Install the rule
npm install -D eslint-plugin-unused-imports

# Add to eslint.config.mjs
```

## Project-Specific Findings

Your components are well-organized:
- ✅ All 8 components in `/components` are imported in `app/page.tsx`
- ✅ No obvious unused exports detected

---

# 2. Dependency Audit

## Step 1: Run Dependency Analysis

```bash
# Check for unused dependencies
npx depcheck

# Or use knip (more comprehensive)
npx knip --output
```

## Step 2: Clean Package.json

Based on your current `package.json`, here are recommendations:

### Currently Used (Keep):
- ✅ `next` (16.1.6)
- ✅ `react` / `react-dom` (19.2.3)
- ✅ `@react-three/fiber` (used in ModelViewer.tsx)
- ✅ `@react-three/drei` (used in ModelViewer.tsx)
- ✅ `three` (used in ModelViewer.tsx)
- ✅ `@types/three` (required for TypeScript)
- ✅ `framer-motion` (used across all components)
- ✅ `lucide-react` (used across all components)
- ✅ `tailwindcss` / `@tailwindcss/postcss` (build system)
- ✅ `typescript`, `@types/node`, `@types/react` (development)

### Review for Removal:
```bash
# Run this to see actual usage
npx depcheck
```

## Step 3: Clean node_modules Cache

```bash
# Option A: Clean npm cache
npm cache clean --force

# Option B: Remove and reinstall (recommended for major cleanup)
rm -rf node_modules package-lock.json
npm install

# Option C: Use pnpm (faster, more efficient)
npm install -g pnpm
rm -rf node_modules package-lock.json
pnpm install
```

## Step 4: Verify Bundle Size

```bash
# Analyze bundle
npm run build
# Check output for large dependencies

# Or use @next/bundle-analyzer
npm install -D @next/bundle-analyzer
```

Add to `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
```

---

# 3. Asset & 3D Model Optimization

## Critical Finding: Empty models directory

```
/public/models/  ← EMPTY - should be removed or populated
```

## Step 1: Audit /public Folder

```bash
# List all assets in public
ls -la public/

# Check for unused SVGs
# Current files:
# - file.svg      ← Possibly unused
# - globe.svg     ← Possibly unused  
# - next.svg      ← Remove (Vercel default)
# - vercel.svg    ← Remove (Vercel default)
# - window.svg    ← Possibly unused
```

### Recommended Actions:

```bash
# Remove unused Vercel/Next default assets
rm public/next.svg
rm public/vercel.svg

# Verify which SVGs are actually used in code
grep -r "\.svg" app/ components/
```

## Step 2: Check for Unused 3D Models

Since you migrated from Unity to Flutter, check for lingering assets:

```bash
# Find all 3D model files
find . -name "*.glb" -o -name "*.gltf" -o -name "*.obj" -o -name "*.fbx"

# Check model viewer imports
grep -r "glb\|gltf" components/
```

**Finding:** Your `ModelViewer.tsx` uses `@react-three/fiber` for runtime 3D, not pre-loaded `.glb` files.

## Step 3: Optimize 3D Models (for Flutter AR)

For your DiengVibe AR project:

```bash
# Use gltf-transform for optimization
npm install -D @gltf-transform/cli

# Optimize.glb files
npx gltf-transform optimize input.glb output.glb --compress
```

---

# 4. Git & Build Cleanup

## Step 1: Remove Files Already in .gitignore

These files WERE committed but are now ignored. **WARNING:** This removes them from git history!

### Option A: Remove from git only (local files remain)

```bash
# Remove from git index
git rm -r --cached .next/
git rm -r --cached node_modules/
git rm -r --cached build/
git rm -r --cached dist/

# Commit the removal
git commit -m "chore: remove build artifacts from git tracking"
```

### Option B: Complete reset (WARNING: removes files locally too)

```bash
# Only if you want to completely reset and start fresh
git rm -r --cached .
git checkout . --force
# ⚠️ THIS IS DANGEROUS - make backup first!
```

## Step 2: Clear Build Folders

```bash
# Clear Next.js build cache
rm -rf .next/
rm -rf out/

# Clear build folders
rm -rf build/ dist/

# Clear TypeScript cache
rm -f *.tsbuildinfo
rm -f next-env.d.ts

# Clear test coverage
rm -rf coverage/
```

## Step 3: Fresh Production Build

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Build for production
npm run build

# Verify build output
ls -la .next/
```

---

# CLEAN-UP CHECKLIST for P2MW 2026

## Pre-Build Checklist

- [ ] **Run dependency audit**
  ```bash
  npx depcheck
  ```
  
- [ ] **Remove unused packages**
  ```bash
  npm uninstall <unused-package>
  ```

- [ ] **Clean public folder**
  ```bash
  # Remove unused defaults
  rm public/next.svg public/vercel.svg
  
  # Verify needed assets remain
  ls public/
  ```

- [ ] **Remove empty directories**
  ```bash
  # Check for empty model folder
  ls public/models/
  # If empty: rm -rf public/models/
  ```

- [ ] **Git cleanup**
  ```bash
  git rm -r --cached .next/ node_modules/ build/ dist/
  git commit -m "chore: remove build artifacts"
  ```

- [ ] **Clear all caches**
  ```bash
  rm -rf .next/
  npm cache clean --force
  ```

## Build Verification

- [ ] **Run production build**
  ```bash
  npm run build
  ```

- [ ] **Check bundle size**
  ```bash
  # Should be under 1MB for initial load
  du -sh .next/static/
  ```

- [ ] **Test locally**
  ```bash
  npm run start
  # Visit http://localhost:3000
  ```

## Final Pre-Submission

- [ ] **Verify no secrets in code**
  ```bash
  grep -r "apiKey\|password\|secret" --include="*.ts" --include="*.tsx"
  ```

- [ ] **Check .env files are ignored**
  ```bash
  cat .gitignore | grep env
  ```

- [ ] **Final git status**
  ```bash
  git status
  # Should only show: modified files, no build artifacts
  ```

---

# Additional Recommendations

## 1. Add to package.json scripts

```json
{
  "scripts": {
    "clean": "rm -rf .next/ build/ dist/",
    "prune": "depcheck && knip",
    "rebuild": "npm run clean && rm -rf node_modules package-lock.json && npm install && npm run build"
  }
}
```

## 2. Enable Next.js optimizations

In `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images (if using next/image)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Remove source maps in production
  productionBrowserSourceMaps: false,
  
  // Optimize bundle
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{ kebabCase name }}',
    },
  },
};

export default nextConfig;
```

## 3. Flutter AR Project Notes

For your DiengVibe Flutter project, ensure in `pubspec.yaml`:

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^5.0.0

# Use flutter pub deps to check unused
# Run: flutter pub deps --no-example
```

---

## Summary Commands

```bash
# Quick cleanup (copy-paste this)
npm run clean
git rm -r --cached .next/ node_modules/ build/ dist/
rm -f public/next.svg public/vercel.svg
npm cache clean --force
npm install
npm run build
```

---

*Generated for P2MW 2026 Submission*
*Project: my-portfolio + DiengVibe AR*

