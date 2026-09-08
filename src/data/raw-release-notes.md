# Release Notes

Here, You will find short, sweet and casual `tldrs` for release notes or change-log.
For more details and more professional tone, see [changelog.md](changelog.md).

This release notes are more or less end-user oriented.

!!! tip

    Do checkout the [changelog](changelog.md) for more formal release notes. it is more technical to read..

    This here are..... also.... more user oriented changes.... This document is more like a communication between,
    developer & user about the changes and impact of passcodes project.

---

## Link

- **Website:** [https://passcodesapp.github.io/Passcodes-Website/](https://passcodesapp.github.io/Passcodes-Website/)
- **Discord:** [Discord (@kSSkYq7KAQ)](https://discord.gg/kSSkYq7KAQ)

---

## v3.2.1 - Stable (Aug 2, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 57
Version Code = 10
Version Name = "v3.2.1-Stable"
Master Database Schema Version = "v2"
```

**`TL;DR`: Screen Rotation | Fix Tab Navigation | Improved UI/UX**

- improved password list screen, added list & grid layout..
- fixed tabs layout back navigation issue.
- added inapp screen shot prevention toggle.
- improved settings screen and make a consistent UI.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.2.1){:target="\_blank"}  
[Changelog](changelog.md#v321-stable-aug-2-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v3.2.0...v3.2.1)

---

## v3.2.0 - Stable (July 25, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 57
Version Code = 10
Version Name = "v3.2.0 - Stable"
Master Database Schema Version = "v2"
```

**`TL;DR`: Material UI | Support Light/Dark Mode**

- improved UX with modern material UI & modern gestures support.
- added dark mode for night.
- better security as we have added screen shot & screen capture prevention.
- optimize the performance & size of application.
- added icons for better understanding.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.2.0){:target="\_blank"}  
[Changelog](changelog.md#v320-stable-july-25-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v3.1.0...v3.2.0)

---

## v3.1.0 - Stable (June 22, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 56
Version Code = 9
Version Name = "v3.1.0-Stable"
Master Database Schema Version = "v2"
```

??? question "How To Get Your Data Back"

    When you open the app after upgrading, all your data (passwords) will not be visible/present in just updated app.
    to get all that previous data, you need to go into `Setting` inside the app. and click on `Data Recovery`, under the troubleshooting section.

    if you encounter any bug during this, don't panic or delete/uninstall the app.. firstly report to us @(telegram/discord) we will get you out of that mess. but if you delete/uninstall the app, we will not be able to help you.

    So, **please never-ever uninstall the passcodes without taking a proper backup of your data**.

**`TL;DR`: In-App Biometrics Lock | Import/Export Passwords To Google Passwords | Intuitive UI/UX**

- added the update password feature that was missing in last update.
- added in-app lock for better security. you need enable it from app settings. it will lock the app after 2 minutes of inactivity. if, it goes to background.
- rich troubleshooting options. specifically, this option are much realiable and faster than previous troubleshooting.
- provided a import & export feature for passwords. the format that we uses is compatible with google passwords.
- improved UI/UX. added better styling for button & textfields. also thier is a rich password details screen.
- faster startup times. faster interacion. faster everythings as we have move to expo sdk 56. reduced bundle sizing, even if new features are added.
- and thier are small security things here and there like, keep my data prompt on android app uninstallion and stuff.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.1.0){:target="\_blank"}  
[Changelog](changelog.md#v310-stable-june-22-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v3.0.0...v3.1.0)

---

## v3.0.0 - Alpha (May 24, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Expo SDK = 55
Version Code = 8
Version Name = "v3.0.0-Alpha"
Master Database Schema Version = "v2"
```

??? question "How To Get Back Old Data"

    When you open the app after upgrading, all your data (passwords) will not be visible from new app.
    to get all that old data, you need to go into `Setting` inside the app. and click on `GetBack Passwords From Prior To v3`, under troubleshooting section.
    then you need to wait utill you see `SUCCESSFULLY MIGRATED` in green color. and that's it. navigate back or close and reopen the app and all your data will be back.

    if you encounter any bug during this, don't panic or delete/uninstall the app.. firstly report to us @(telegram/discord) we will get you out of that mess. but if you delete/uninstall the app, we might not be able to help you.

    So, **please never-ever uninstall the passcodes without taking a proper backup of your data**.

**`TL;DR`: Cross Platform | Expo (React-Native) | Passcodes New Beginning...**

- remaked the app again with expo (react-native).
- currently, just made a basic password manager app. we are improve it but it first release from react native codebase.
- added troubleshooting option. specifically, a way to get back all your password from previous versions.
- we working on get all features avaiable untill now. we will releasing new version(s) soon.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v3.0.0){:target="\_blank"}  
[Changelog](changelog.md#v300-alpha-may-24-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v2.1.1...v3.0.0)

---

## ----- End Of Android Only -----

We have officially moved of android native and we now use expo react native.

---

## v2.1.1 - Beta (May 19, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 17 (API level 37)
Version Code = 7
Version Name = "v2.1.1-Beta"
Master Database Version = "v2"
```

???+ failure "Some MIUI Phones Takes Time To Adjust"

    basically, I have heard from some users. specfically, In MIUI (Hyper OS), Material 3 Expressive UI is taking time to load/adjust..
    like after you install the app.. it takes 5-10 minutes... I don;t why it like that.. maybe cuz, specfic device configuration...

    give it time. cuz, it fix itself,
    according to what i have hear from users.... I & no one, on development team have testing device. so we wouldn;t be able to detect the bug cause... but the app is in end-of-supprt anyway.

    if is still not fix... then I (as in JeelDobariya38) have release a unofficial update from my part on telegram community...
    it a unofficial (opt-in) release only for those who are getting the bug...
    that opt-in release, will not have any support what-so-ever... i have just reverted the changes of Material 3 Expressive UI using git. what-so-ever.

    [v2.1.2 download link](https://t.me/passcodescommunity/236) (idk how much time, this link will be valid for...)

**`TL;DR`: End of Support for v2.x.x | Material 3 Expressive UI...**

- add materail 3 expressive ui to buttons & themes.
- improve importing & exporting google passwords to support multiline notes & qouted (") fields in csv.
- improve security, performance updates.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v2.1.1){:target="\_blank"}  
[Changelog](changelog.md#v211-beta-may-19-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v2.1.0...v2.1.1)

---

## v2.1.0 - Beta (May 12, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 17 (API level 37)
Version Code = 6
Version Name = "v2.1.0-Beta"
Master Database Version = "v2"
```

**`TL;DR`: End of Support for v2.x.x | Expo-React-Native kickstart...**

- added a warning dialog for announcing "end of support".
- now, android 15, 16 & 17 support offically. utill now we were supporting upto android 14.
- make importing & exporting passwords as a stable feature.
- fixed back navigation issues with preview layouts.
- adjusted & optimized update checking features.
- improved view password screen & enhanced url field support.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v2.1.0){:target="\_blank"}  
[Changelog](changelog.md#v210-beta-may-12-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v2.0.0...v2.1.0)

---

## v2.0.0 - Beta (Apr 16, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 5
Version Name = "v2.0.0-Beta"
Master Database Version = "v2"
```

**`TL;DR`: Added fingerprint lock & fixed autofill feature...**

- improve security. added a fingerpint authentication to open application. its a preview feature for now.
- fixed issues with autofill features. app doesn't crash anymore with autofill feature. its still a preview feature & under development.
- added two different screen types for new modern & cool teenages & something easier to work with for elderly peoples. you can access it using in-app preview feature toggle.
- improved support for switching between old-ui & new-ui. basically it look more like screen change rather than a app crash, which previously was true.
- we are now a decent app, if looked from google point of view. we are following all best practices & actively keeping up with latest changes, except proper encryption. 😥😥😥

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v2.0.0){:target="\_blank"}  
[Changelog](changelog.md#v200-beta-apr-16-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.2.1...v2.0.0)

---

## v1.2.1 - Alpha (Jan 31, 2026)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 4
Version Name = "v1.2.1-Alpha"
Master Database Version = "v1"
```

**`TL;DR`: Fix my mistake, by updating the version name that I forget last time...**

- Last time (v1.2.0), I forget to update the version so fix it and re-release instantly... (gotta a real-idea of how dangerous "publish" button on github is.... 😂😂😂😂😂)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.2.1){:target="\_blank"}  
[Changelog](changelog.md#v121-alpha-jan-31-2026)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.2.0...v1.2.1)

## v1.2.0 - Alpha (Jan 31, 2026) [YANKED RELEASE]

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 3
Version Name = "v1.1.2-Alpha"
Master Database Version = "v1"
```

!!! failure

    This is an [yanked release](installing.md#explicitly-yanked-release-pure-trash) and should not be used by any user.
    The soley purpose of this release is, just for documenation & serves as a part of project's story...

    This release is yanked cuz, I launch the app in hurry and forget to do something that need to be done... (forget to update version number)...
    Checkout the release on github for full details...

    Don't use this release (v1.2.0) in any case.... always prefer that release (v1.2.1) over this... because it will create confusion in bug reports like if you use this release and a bug occur... you will not be able to tell whether you are on previous release (v1.1.2) or this release (v1.2.0)... due to same version number in two different release....

**`TL;DR`: Design a new jetpack compose preview ui.. | Improved performance...**

- App now has a basic new preview.. jetpack compose ui... that can be used instead of old ui...
- App provide a toggle to switch between two layouts...
- Improve file selection menu experience while importing passwords..
- Perfomance optimization. (due to dependency updates.)

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.2.0){:target="\_blank"}  
[Changelog](changelog.md#v120-alpha-jan-31-2026-yanked-release)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.1.2...v1.2.0)

## v1.1.2 - Alpha (Dec 15, 2025)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 3
Version Name = "v1.1.2-Alpha"
Master Database Version = "v1"
```

!!! danger

    This is a kind of a breaking release, it will wipe off all your in-app settings..
    which mean after updating the app, all your previous setting will be reset to defualt.

    This **doesn't** mean that your password data will be lost.. I repeat **your password data will be there as it is, untouched in app**.

    ??? question "You may ask why this is not `v2.0.0`?  even if it has breaking changes???"
        Firstly, the user interaction with app is not change that much in this release that it make sense to make it a major release (`v2.0.0`).

        Secondly & more importantly, It is `v1.1.1` because, setting's data is not than important, core & criticual to app itself.

**`TL;DR`: Improve the internal code quality.. | Clean architecture in codebase...**

- For user side of app.. things might look same.. or even some part of ui, like conformation dialog may seems to disapper completely.
- App has **changed completely internally in codebase**. The architecture of the app has shifted from something along the lines of MVC..
  to MVI Flavoured Clean architecture. Which is more **like google's/industry's way of making app in android's world**...
- This architecture changes in app will give us as developers a better place (codebase) to work in. This means a solid foundation for further features.
- This release is more like a **shift in direction of passcodes development trajectory, towards becaming a industry/production ready app** rather than just became an another password manager app..
- This release is also being a major part of—actually, it marks the completion of the phrase 1—biggest refactoring of codebase, we are doing at passcodes.... [#42](https://github.com/PasscodesApp/Passcodes/issues/42)
- And thus, a part of it contains premature features like **Autofill & Jetpack Compose UI**. Which are served as a preview features in app, but you can also turn them on if you wish...
- This release also bring with it some performance enhancements—theorically, Because I have not notice it yet—as the app now run on **`JAVA 21`**. it was previously `Java 11`.

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.1.2){:target="\_blank"}  
[Changelog](changelog.md#v112-alpha-dec-15-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.1.1...v1.1.2)

---

## v1.1.1 - Alpha (Sept 11, 2025)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 2
Version Name = "v1.1.1-Alpha"
Master Database Version = "v1"
```

**`TL;DR`: Sorry for delay, but we have fix import files feature...**

- We are **very sorry for the 10-days delay** for such a small fix.. We have officially fixed the import passwords csv file selection bug...
- With this fix you can now import the new passwords as expected.....
- Unlike eariler, **you will now able to select csv file from your device** file picker for importing passwords.
- In big project, such small mistakes/things happens.. so, ignore it please...

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.1.1){:target="\_blank"}  
[Changelog](changelog.md#v111-alpha-sept-11-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.1.0...v1.1.1)

---

## v1.1.0 - Alpha (Sept 1, 2025)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 2
Version Name = "v1.1.0-Alpha"
Master Database Version = "v1"
```

??? question "Why &quot;PasscodesApp&quot; as a Github Organization? not Passcodes.."

    Organization is named **PasscodesApp and not Passcodes. Because, passcodes as name is already taken** & not available on github as of _Aug 31, 2025_....

    Stick to watch and observe upcoming changes & progress... [Telegram (@passcodescommunity)](https://t.me/passcodescommunity)

**`TL;DR`: Design Improvements.. | Will work with google passwords.... | We are officially an organization on GitHub from `Aug 31, 2025`....**

- This is our first **official release after migrating to the github organization...**
- This release has feature like importing & exporting passwords from google password's app...
- This is an alpha release. So it has unstable features.
- Also, both the features (copying passwords & importing-exporting passwords) are disable by default. due to security threats... But, they can be turn on if you wish...
- From this point onwards, app has a mechanism to release feature progressively using **`"feature flags"`**. This means one could opt-into newer unstable features & get earlier access to latest features. As a tradeoff to the stablity of the app itself.. meaning **you are an unoffical earlier tester** of the app/project..

??? note "Became An Offical Tester"

    If you wish to became a offical tester for the app, let us know on our telegram community. [(@passcodescommunity)](https://t.me/passcodescommunity)

    This mean you get credit for your work & some testing responsiblity.. like testing new feature..
    share you user point of view for a feature. test usablity of the whole app. and basically act as a Q/A Tester.

    You might also ask to test the security and asked to exploit the app. so, that we can discover flaws in our app..

- Also as the passcodes have change from **"just my personal hobby project" to an official github based organization**.. This release mark as a step forward for us towards open source and towards [open to contribute](../references/open-contributing-timeline.md)... and potentailly leading us as a community as a whole.....
- And more importantly it reflect, my long term vision with passcodes as a project... what it means?...
- Upcoming things will be more fascinating to watch and to be part of... So stick with us.. [Telegram (@passcodescommunity)](https://t.me/passcodescommunity)
- And also the app will have more long term support... (if you ignore, the fact that [I am not a verified developer, as of _"1/9/25 by google"_... but will do it in a near time...](https://developer.android.com/developer-verification))

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.1.0){:target="\_blank"}  
[Changelog](changelog.md#v110-alpha-sept-1-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v1.0.0...v1.1.0)

---

## v1.0.0 - Stable (Aug 16, 2025)

```
Package Name = "com.jeeldobariya.passcodes"
Min Android = 8.0 (API level 26)
Max Android = 14 (API level 34)
Version Code = 1
Version Name = "v1.0.0-Stable"
Master Database Version = "v1"
```

**`TL;DR`: Our first stable release.. | Not much has change in terms of look and features.. | Name of project has changed to `Passcodes`..**

- This is our first stable release, even though it looks and behaves same as prototype release.
- It's now more stable and more reliable as the data storage system is now tested, optimized and uses more modern approach (`room library`).
- Things have change internally also... like app was first builded using java language.. but, now it is in **kotlin** language. which is more **align to google's way of building app**.
- Now, you also have in-app ablity to switch languages & themes.. (Don;t rely on transalation as they are ai generated for now).
- App now has an improved UI/UX, It has hint's.. especially, as you all where asking like, **"what is domain?" "what can i write in domain?" and so on.....**

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v1.0.0){:target="\_blank"}  
[Changelog](changelog.md#v100-stable-aug-16-2025)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/compare/v0.1.0...v1.0.0)

---

## v0.1.0 - Alpha (Aug 26, 2024) [YANKED RELEASE]

!!! danger

    This is an [yanked release](installing.md#explicitly-yanked-release-pure-trash) and should not be used by any user.
    The soley purpose of this release is, just for documenation & serves as a part of project's story...

    The main cause we have yanked this release is.. not that the release itself is bad by any manner.. but the app name it uses is "password manager".
    which is an old name, the name we have started our journey with. we have after a year (2024), maded a decision and envisioned project differently, with a name "passcodes".. which is a also an old name. one of mine eariler project, which I have removed from github... but it was the reason I meet [Daniel](https://github.com/kudanilll) in the first place.. and we have started this new project as `password manager` and that eventally became `passcodes`... and now it's in production and in real user's hands... as you read this... 😂😂😂😂😂

    We have yanked this release to show this shift... you can even see in details below that package name has change..
    So theoretically and practically also, It is an another app/project... an deperacted one in software term's...

    Read more over at github [#12](https://github.com/PasscodesApp/Passcodes/discussions/12){:target="_blank"} & [#14](https://github.com/PasscodesApp/Passcodes/issues/14){:target="_blank"}

```
Package Name = "com.passwordmanager"
Min Android = 8.0 (API level 26)
Max Android = 13 (API level 33)
Version Code = 1
Version Name = "0.1.0-Alpha"
Master Database Version = "v1"
```

**`TL;DR`: Our first initial release.. | Prototype release..**

- It a prototype release which mean it can have bugs...
- It has all the core features, like creating, reading, updating and deleting passwords...
- It has a basic UI that allow you to do things, really intuitively and more structurely...
- But structure and intuitiveness doesn't necessary means a modern user interface—which is little to less cool, but UI reflect a structure in it...

[Checkout Release](https://github.com/PasscodesApp/Passcodes/releases/tag/v0.1.0){:target="\_blank"}  
[Changelog](changelog.md#v010-alpha-aug-26-2024-yanked-release)  
[Full Changelog](https://github.com/PasscodesApp/Passcodes/commits/v0.1.0)
