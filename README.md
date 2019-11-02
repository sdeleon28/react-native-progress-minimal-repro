# Minimal app to repro CircleSnail not working in react-native-progress

## To reproduce with this repo:

```
git clone https://github.com/sdeleon28/react-native-progress-minimal-repro.git
cd react-native-progress-minimal-repro
yarn install
yarn start
```

Then scan the QR code with the Expo app

### Expected behavior:

Circle snail should be displayed

### Actual behavior:

Nothing shows up

## To re-create this test-case from scratch

```
create-react-native-app minimal-progress
cd minimal-progress
yarn add react-native-progress@4.0.0
```

Then import `Progress` with `import * as Progress from 'react-native-progress';` and try to use it with `<Progress.CircleSnail ...`.
