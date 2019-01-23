# Changelog
All notable changes to this project from 2019-01-21 will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2019-01-22
### Added
- Added documentation to the interface.
- Added the `completionBlock` property for executing work upon completion of the animation.
- Added the `playAnimationFromProgressToProgress` function for playing the animation from the specified start and end progress values.
- Added the `setColorValueDelegateForKeyPath` function for setting the provided color value on each property that matches the specified keyPath.
- Added the `setOpacityValueDelegateForKeyPath` function for setting the provided opacity value on each property that matches the specified keyPath.

### Changed
- Changed the iOS implementation to remove unnecessary layout and measurement logic.
- Changed both the android and iOS implementations to align them where possible.
- Changed both the Angular and plan demos to align them, and to demonstrate the newly added apis.

### Removed
- Removed exposed properties with no backing implementation have been removed.
- Removed the `theme` property removed in favour of `setColorValueDelegateForKeyPath`.
- Removed the LottieHelper jar.
