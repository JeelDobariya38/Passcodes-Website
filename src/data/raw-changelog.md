# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
We don't strictly follow them. but the exceptions are very less, very intuitive, but..obvious
and well documented in our release workflow docs.

!!! tip

    Do checkout the [release notes](release-notes.md) for casual changelog. it is more user friendly to read..
    and documents important changes to project in a way's that make sense from a users view.

    This here is for technical users and more developer oriented changelog.

---

## Link

- **Website:** [https://passcodesapp.github.io/Passcodes-Website/](https://passcodesapp.github.io/Passcodes-Website/)
- **Discord:** [Discord (@kSSkYq7KAQ)](https://discord.gg/kSSkYq7KAQ)

---

## v3.2.1 - Stable (Aug 2, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 57
Version Code = 10
Version Name = "v3.2.1-Stable"
Master Database Schema Version = "v2"
```

</details>

### Added

- **Support Screen Rotation**: added screen roatation support & grid layout for it.

### Changed

- **Improved Settings**: improved settings screen & make layout consistent. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Optimized Performance**: upgrade to latest dependencies & code optimizations [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Fixed

- **Back Navigation With Tabs**: fixed the backward navigation problems with tabs. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **In App Lock**: fixed the in-app lock, it now also work on devices that doesn't have biometrics support. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.2.1){:target="\_blank"}  
[Release Notes](release-notes.md#v321-stable-aug-2-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v3.2.0...v3.2.1)

---

## v3.2.0 - Stable (July 25, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 57
Version Code = 10
Version Name = "v3.2.0 - Stable"
Master Database Schema Version = "v2"
```

</details>

### Added

- **Material UI**: added material UI for better UI/UX. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Font Awesome Icons**: add fontawesome icons for better layout understanding. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Screen Shot Prevention**: add screen-shot prevention on passscodes details screen. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Changed

- **Improved Navigation**: add tab navigation for better & modern navigation flow. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Optimized Performance**: upgrade to Expo SDK 57, improved performance & added flash-list for scrolling performance & added architecture specific app download option for optimized app size. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.2.0){:target="\_blank"}  
[Release Notes](release-notes.md#v320-stable-july-25-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v3.1.0...v3.2.0)

---

## v3.1.0 - Stable (June 22, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 56
Version Code = 9
Version Name = "v3.1.0-Stable"
Master Database Schema Version = "v2"
```

</details>

### Added

- **Update Passwords Functionality**: added a update password functionality. which was missing in last (v3.0.0-Alpha) release. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **In-App Lock**: added a in-app biometrics lock to protect user data. it can be opt-in by using settings. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Import & Export Google Passwords**: added a way to import & export passwords to csv. specifically, the format is compatible with google passwords. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Keep My Data On Uninstall**: added a android only feature, that prompts user on uninstall. weather to keep thier data or delete it. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Changed

- **Intuitive UI/UX**: improved UI for users, make it easier for user to navigate around. and easily tell wether something is text or button. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Fix Database Naming Inconsistency**: fix inconsietency in naming of database. it will need user to go and click on `Setting -> Data Recovery` to get thier data back. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Improved Performance**: faster start up times, better speed & more faster performant exprience overall. as we have moved to expo sdk 56. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Improved Troubleshooting**: significant better troubleshooting option with high performance. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Fixed

- **Splash Screen**: improved & fixed icons on splash screen. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Notes

When you open the app after upgrading, all your data (passwords) will not be visible from new app.
cuz, new react native app use a different database (master). so, password that saved previously are in different database & need to be imported.

To import the old data. Go into `Setting` inside the app. and just click `Data Recovery` under troubleshooting.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.1.0){:target="\_blank"}  
[Release Notes](release-notes.md#v310-stable-june-22-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v3.0.0...v3.1.0)

---

## v3.0.0 - Alpha (May 24, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 55
Version Code = 8
Version Name = "v3.0.0-Alpha"
Master Database Schema Version = "v2"
```

</details>

!!! info "Remake A Basic Passcodes App"

    we have start again with expo (react-native). which means, we have deleted the old codebase and started again.
    so, the new app lacks potential features. we are trying hard to develop the features as soon as possible.

    please stick with us.

### Added

- **Remake With Expo (React Native)**: maked the app again with expo (react-native). maked a basic password manager app. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Migrated Data To Drizzle DB**: wrote a drizzle database implementaion & a way to get old data from `room db` into `drizzle db`. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Troubleshooting Options**: added troubleshooting option. specifically, a way to get back all your password from previous versions. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Notes

When you open the app after upgrading, all your data (passwords) will not be visible from new app.
cuz, new react native app use a different database (drizzle). so, password that saved previously are in Room database,
need to be imported.

To import the old data. Go into `Setting` inside the app. and click `GetBack Passwords From Prior To v3` under troubleshooting. now you redirect to new screen where you need wait utill you see in green color... `SUCCESSFULLY MIGRATED.....`. and that's it.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.0.0){:target="\_blank"}  
[Release Notes](release-notes.md#v300-alpha-may-24-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v2.1.1...v3.0.0)

---

## ----- End Of Android Only -----

We have officially moved of android native and we now use expo react native.

---

## v2.1.1 - Beta (May 19, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 17 (API level 37)
Version Code = 7
Version Name = "v2.1.1-Beta"
Master Database Version = "v2"
```

</details>

!!! failure "Some MIUI Phones Takes Time To Adjust"

    basically, I have heard from some users. specfically, In MIUI (Hyper OS), Material 3 Expressive UI is taking time to load/adjust..
    like after you install the app.. it takes 5-10 minutes... I don;t why it like that.. maybe cuz, specfic device configuration...

    give it time. cuz, it fix itself,
    according to what i have hear from users.... I & no one, on development team have testing device. so we wouldn;t be able to detect the bug cause... but the app is in end-of-supprt anyway.

    if is still not fix... then I (as in JeelDobariya38) have release a unofficial update from my part on telegram community...
    it a unofficial (opt-in) release only for those who are getting the bug...
    that opt-in release, will not have any support what-so-ever... i have just reverted the changes of Material 3 Expressive UI using git. what-so-ever.

    [v2.1.2 download link](https://t.me/passcodescommunity/236) (idk how much time, this link will be valid for...)

### Added

- **Material 3 Expressive**: added material 3 expressive buttons and theme in defualt (old) ui. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Changed

- **Improve Importing/Exporting Passwords**: added apache csv libaray to handle csv files. it now handles escaped-qouted commas & newline in (google-passwords generated) csv. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v2.1.1){:target="\_blank"}  
[Release Notes](release-notes.md#v211-beta-may-19-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v2.1.0...v2.1.1)

---

## v2.1.0 - Beta (May 12, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 17 (API level 37)
Version Code = 6
Version Name = "v2.1.0-Beta"
Master Database Version = "v2"
```

</details>

### Breaking Changes

- **No breaking changes.. but, end of support warning**: this is last release from android codebase. we will now migrate to expo-react-native and thier will be no security updates provided for release v2.x.x & prior, what-so-ever.

### Added

- **Improve View Password Screen**: improved view password & other password management screens. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Improve URL field**: improved support for url field. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Changed

- **Android 17 Support**: bring official support for android 15, 16 & 17. which previous was limited to android 14 officially. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Import/Export Stability**: import/export passwords features are now stabilized. and are no longer a preview feature. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Adjusted Update Checking**: adjusted & optimized update checking for performance as we are reaching a end of support period. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Improved Performance & Security**: keeping up with android latest dependencies & community standards. [[@dependabot]](https://github.com/dependabot)

### Fixed

- **Back Navigation**: improved & fixed back navigation problem with preview layouts. handle android backstack. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Notes

**End Of Support**: this offically marks end the android native development era over here in passcodes as we are now migrating to react-native (expo). please note that no further security updates will be provided for this & prior releases.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v2.1.0){:target="\_blank"}  
[Release Notes](release-notes.md#v210-beta-may-12-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v2.0.0...v2.1.0)

---

## v2.0.0 - Beta (Apr 16, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 5
Version Name = "v2.0.0-Beta"
Master Database Version = "v2"
```

</details>

### Breaking Changes

- **No breaking changes**: just the internal database version has changed.

### Added

#### Preview Features

- **Biometrics Authentication**: enhanced safety for password manager by restricting access to app. users now need to authenticate to open the application. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Accessibility Layouts**: added support for two different layouts: one is morden and intended to be use by teenages. while other one is bit old, but easy to navigate by elderly peoples. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Changed

- **Better Jetpack Compose Support**: improve support for jetpack compose UI & streamline the process of migrating from oldUI to jetpack UI. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Better Update Checking**: migrated to ktor http client. it is modern and versatile http library. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Improved Performance & Security**: keeping up with android latest dependencies & community standards. we have resolve & migrated all of our (concerned) dependency, except one `org.json` which is also at rank #74 in maven repository. so, its a community standard anyway. [[@dependabot]](https://github.com/dependabot)

### Fixed

- **Autofill Crashing**: improved & fixed the bug with autofill service. now autofilling is not crashing anymore. (but, its still a preview feature). [[@JeelDobariya38]](https://github.com/JeelDobariya38) & [[@hexCode63]](https://github.com/hexCode63)

### Other Changes

- **Improve DX**: improvements in CI/CD, documentation & jetpack-compose-previews in android studio. [[@JeelDobariya38]](https://github.com/JeelDobariya38)
- **Multiplatform (Early Start)**: maded database & design system compatible for kmp development. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Notes

**Resolved all backlogs with Goggle latest standards for android development**: We have complete the biggest migration that was going on in passcodes. [PasscodesApp/Passcodes#42](https://github.com/PasscodesApp/Passcodes/issues/42)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v2.0.0){:target="\_blank"}  
[Release Notes](release-notes.md#v200-beta-apr-16-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.2.1...v2.0.0)

---

## v1.2.1 - Alpha (Jan 31, 2026)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 4
Version Name = "v1.2.1-Alpha"
Master Database Version = "v1"
```

</details>

### Fixed

- **Update Version Info**: update the version name and version code that, I forget last time in a rush of releasing a new version.. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.2.1){:target="\_blank"}  
[Release Notes](release-notes.md#v121-alpha-jan-31-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.2.0...v1.2.1)

## v1.2.0 - Alpha (Jan 31, 2026) [YANKED RELEASE]

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 3
Version Name = "v1.1.2-Alpha"
Master Database Version = "v1"
```

</details>

!!! failure

    This is yanked release.. cuz, I forget to update version name in hurry of releasing a new version.

    Don't use this release (v1.2.0) in any case.... always prefer that release (v1.2.1) over this... because it will create confusion in bug reports like if you use this release and a bug occur... you will not be able to tell whether you are on previous release (v1.1.2) or this release (v1.2.0)... due to same version number in two different release....

### Added

#### Preview Features

- **Jetpack Compose (Preview Feature)**: made a jetpack compose UI that can be used for basic operation. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Fixed

- **Mimetypes For Import Passwords**: fixed csv mimetypes for importing passswords feature for better experience with android file picker.. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.2.0){:target="\_blank"}  
[Release Notes](release-notes.md#v120-alpha-jan-31-2026-yanked-release)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.1.2...v1.2.0)

## v1.1.2 - Alpha (Dec 15, 2025)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 3
Version Name = "v1.1.2-Alpha"
Master Database Version = "v1"
```

</details>

!!! danger "Breaking Changes"

    This is a kind of a breaking release, it will wipe off all your in-app settings..
    which mean after updating the app, all your previous setting will be reset to defualt.

    This **doesn't** mean that your password data will be lost.. I repeat **your password data will be there as it is, untouched in app**.

    ??? question "You may ask why this is not `v2.0.0`?  even if it has breaking changes???"
        Firstly, the user interaction with app is not change that much in this release that it make sense to make it a major release (`v2.0.0`).

        Secondly & more importantly, It is `v1.1.1` because, setting's data is not than important, core & criticual to app itself.

### Breaking Changes

- **Migrate to DataStore**: changed the way how setting and feature flag were been storage.
  previously, we were using shared preferences. but,
  now we use datastore which is much more modern way of storing such type of data... but this will also mean
  that all your previously store setting will be longer be available anymore. we have decide this breaking changes,
  because app settings can be restored again (in like few minutes). [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Added

#### Preview Features

- **Autofill System (Preview Feature)**: added an autofill service to autofill user's credentials on
  the fly. [[@hexCode63]](https://github.com/hexCode63)

- **Jetpack Compose (Preview Feature)**: added jetpack compose UI & even added a toggle to switch to
  this new UI. but it would be worthless to do so, because it just has a single screen.. _this feature is mainly
  for very earlier testing_. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Changed

- **MVI Flavored - Clean Architecture**: migrated the codebase to make it more scalable,
  extendable & readable. this will enable us to create better features faster & make a strong base for faster
  iteration & collaboration. and will help us delegate & modularized task in future. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

- **Java 21**: code now compile to java 21. previously it was compiling to java 11.
  this should improve performance & efficiency a bit. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

- **Improved Performance & Responsiveness**: Improve performance & better responsiveness of UI (less of density
  pixel, more of scalable pixel measurements). [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.1.2){:target="\_blank"}  
[Release Notes](release-notes.md#v112-alpha-dec-15-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.1.1...v1.1.2)

---

## v1.1.1 - Alpha (Sept 11, 2025)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 2
Version Name = "v1.1.1-Alpha"
Master Database Version = "v1"
```

</details>

### Fixed

- **Fixed Import Passwords**: fixed the bug that was not allowing user to select csv files
  from file picker. due to incorrect mimetype in code.. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.1.1){:target="\_blank"}  
[Release Notes](release-notes.md#v111-alpha-sept-11-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.1.0...v1.1.1)

---

## v1.1.0 - Alpha (Sept 1, 2025)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 2
Version Name = "v1.1.0-Alpha"
Master Database Version = "v1"
```

</details>

### Added

- **Improved UI/UX**: improved view password screen's visual feel, also adjust the button colors a
  bit. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

- **Added Feature Flagging**: given user a control on whether they wanna latest experience or stable
  experience. added a way for launching preview features without worry about their
  stability. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

- **Update Checking**: made a basic update checker that help users to stay up to date with latest
  release & also notify user about already reported security vulnerability using pre-release
  mechanism. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

#### Preview Features

- **Copy Button (preview feature)**: added a copy button for copying passwords for easy of use. but
  as it
  is potential threat to security, so made it as a preview feature. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

- **G-Passwords Import/Export (preview feature)**: added a import/export feature. which is also
  compatible with google passwords. I have test it with my google password setup. but, I am not sure
  weather this will run in every edge case or not. So, it is a preview feature for
  now. [[@JeelDobariya38]](https://github.com/JeelDobariya38)

### Notes

- **Official Github Organization (Aug 31, 2025)**: migrate project & repository from
  `JeelDobariya38 (personal account)`
  to `PasscodesApp (my organization)` for better development and governance of the project.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.1.0){:target="\_blank"}  
[Release Notes](release-notes.md#v110-alpha-sept-1-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.0.0...v1.1.0)

---

## v1.0.0 - Stable (Aug 16, 2025)

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 1
Version Name = "v1.0.0-Stable"
Master Database Version = "v1"
```

</details>

### Added

- **Localized App**: added language translation for English, Chinese, Hindi, Indonesian, Japanese,
  Korean,
  German, Spanish, Vietnamese. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

- **Improved UI/UX**: added confirmation dialogs for destructive actions, improved support for
  light & dark
  theme with additional minor changes. [[@JeelDobariya38](https://github.com/JeelDobariya38) & [@kudanilll](https://github.com/kudanilll)].

- **New Icon**: rebanded the app as passcodes with a new visual app icon. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

### Changed

- **Migrated Package Name**: migrate package name from `com.passwordmanager` to
  `com.jeeldobariya.passcodes`. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

- **Improve Safety By Kotlin Implementation**: move away from `Java` to `Kotlin`
  Language. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

- **Improve Data Storing Process**: move away from `SqliteDatabase` to `Room` Library for better
  datastorage & security. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.0.0){:target="\_blank"}  
[Release Notes](release-notes.md#v100-stable-aug-16-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v0.1.0...v1.0.0)

---

## v0.1.0 - Alpha (Aug 26, 2024) [YANKED RELEASE]

<details>
  <summary>View Internal Details</summary>

```
Package Name = "com.passwordmanager"
Min Android = 8.0 (API level 26)
Max Android = 13 (API level 33)
Version Code = 1
Version Name = "0.1.0-Alpha"
Master Database Version = "v1"
```

</details>

!!! danger

    This is an [yanked release](installing.md#explicitly-yanked-release-pure-trash) and should not be used by any user.
    The soley purpose of this release is, just for documenation & serves as a part of project's story...

    The main cause we have yanked this release is.. not that the release itself is bad by any manner.. this release was very early & premature..
    As in, a prototype release. It is stable in it own pace.. and you can use it if, you wish to do so.. but treat this version more as premature. & just for learning..
    If you have any error or bug using this version.. you can report to github issues. we will try our best to assist. but this issue won't have prority.. but it will be fun to discuss how an prototype release stand in production enviroment..

    Also the project's name back then use to be "password manager". which is kind of dumb & lame name, and to be honest little to old also, but it is the name we have started our journey with. we have after a year (2024), maded a decision and envisioned project differently with a name "passcodes".. which is a also an old name, one of mine eariler project, which I have removed from github... but it was the reason I meet [Daniel](https://github.com/kudanilll) in the first place.. and we have started this new project as `password manager` and that eventally became `passcodes`... and now it's in production and in real user's hands... as you read this... 😂😂😂😂😂

    The was a eariler release from a parent project of `passcodes`. Read more over at github [#12](https://github.com/PasscodesApp/Passcodes/discussions/12) & [#14](https://github.com/PasscodesApp/Passcodes/issues/14)

### Added

- **App Icon Creation**: designed and implemented the initial app icon, providing the application
  with a recognizable visual identity. [[@HamadaNative]](https://github.com/HamadaNative).

- **Basic App Structure**: established the foundational architecture of the app, including the main
  entry point and the initial setup. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

- **Main Page Development**: developed the main page of the app, including basic UI components and
  initial layout. [[@JeelDobariya38]](https://github.com/JeelDobariya38).

- **Basic Password Store**: developed a database to store the passwords data. [[@kudanilll]](https://github.com/kudanilll).

- **Basic Design System**: developed a basic material 2 design system for consistency in app's
  feel & look. [[@HamadaNative]](https://github.com/HamadaNative).

### Notes

- This was the initial alpha (pre-release), focusing more on setting up the app for a basic structure and
  visual elements. It is an prototype release (`Proof Of Concept`).

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v0.1.0){:target="\_blank"}  
[Release Notes](release-notes.md#v010-alpha-aug-26-2024-yanked-release)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/commits/v0.1.0)
