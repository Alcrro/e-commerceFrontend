const fs = require('fs');
const path = require('path');

// Helper function to move files
function moveItem(src, dest) {
  if (fs.existsSync(src)) {
    const destDir = path.dirname(dest);

    // Ensure the destination directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    fs.renameSync(src, dest);
    console.log(`Moved: ${src} -> ${dest}`);
  } else {
    console.warn(`Source not found: ${src}`);
  }
}

// Move files back to their original structure
const destinationBaseDir = path.join(__dirname, 'src/app');
const sourceBaseDir = path.join(__dirname, 'src/new-structure');

// Reverse the moves based on your previous structure
moveItem(
  path.join(sourceBaseDir, 'auth/components/ActionFormHandler.ts'),
  path.join(destinationBaseDir, 'auth/components/ActionFormHandler.ts')
);
moveItem(
  path.join(sourceBaseDir, 'auth/components/auth.module.scss'),
  path.join(destinationBaseDir, 'auth/components/auth.module.scss')
);
moveItem(
  path.join(sourceBaseDir, 'auth/components/AuthForm.tsx'),
  path.join(destinationBaseDir, 'auth/components/AuthForm.tsx')
);
moveItem(
  path.join(sourceBaseDir, 'auth/components/handleFormAction.ts'),
  path.join(destinationBaseDir, 'auth/components/handleFormAction.ts')
);
moveItem(
  path.join(sourceBaseDir, 'auth/components/InputField.tsx'),
  path.join(destinationBaseDir, 'auth/components/InputField.tsx')
);
moveItem(
  path.join(sourceBaseDir, 'auth/components/TitleForm.tsx'),
  path.join(destinationBaseDir, 'auth/components/TitleForm.tsx')
);
moveItem(
  path.join(sourceBaseDir, 'auth/components/useAuthForm.tsx'),
  path.join(destinationBaseDir, 'auth/components/useAuthForm.tsx')
);

moveItem(
  path.join(sourceBaseDir, 'auth/auth.module.scss'),
  path.join(destinationBaseDir, 'auth/auth.module.scss')
);
moveItem(
  path.join(sourceBaseDir, 'auth/layout.tsx'),
  path.join(destinationBaseDir, 'auth/layout.tsx')
);

// Reverse other moves
moveItem(
  path.join(sourceBaseDir, 'cart/page.tsx'),
  path.join(destinationBaseDir, 'cart/page.tsx')
);
moveItem(
  path.join(sourceBaseDir, 'constants/apiConstants.ts'),
  path.join(destinationBaseDir, 'constants/apiConstants.ts')
);
moveItem(
  path.join(sourceBaseDir, 'products/page.tsx'),
  path.join(destinationBaseDir, 'products/page.tsx')
);
moveItem(
  path.join(sourceBaseDir, 'profile/page.tsx'),
  path.join(destinationBaseDir, 'profile/page.tsx')
);

// Move shared components, hooks, and utils back
moveItem(
  path.join(sourceBaseDir, 'shared/components'),
  path.join(destinationBaseDir, 'shared/components')
);
moveItem(
  path.join(sourceBaseDir, 'shared/hooks'),
  path.join(destinationBaseDir, 'shared/hooks')
);
moveItem(
  path.join(sourceBaseDir, 'shared/utils'),
  path.join(destinationBaseDir, 'shared/utils')
);

// Move root files back
moveItem(
  path.join(sourceBaseDir, 'favicon.ico'),
  path.join(destinationBaseDir, 'favicon.ico')
);
moveItem(
  path.join(sourceBaseDir, 'globals.css'),
  path.join(destinationBaseDir, 'globals.css')
);
moveItem(
  path.join(sourceBaseDir, 'layout.tsx'),
  path.join(destinationBaseDir, 'layout.tsx')
);
moveItem(
  path.join(sourceBaseDir, 'page.tsx'),
  path.join(destinationBaseDir, 'page.tsx')
);

console.log(
  'Files and folders have been restored to their original locations.'
);
