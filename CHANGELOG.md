<a name="readme-top"></a>
# Changelog

# [1.0.0-beta.8](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2025-02-14)


### ✨ Features

* **accounts**: Update third-party account binding and unbinding ([1841552](https://github.com/perfect-panel/ppanel-web/commit/1841552))
* **auth-control**: Adding phone number labels to mobile verification configurations in multiple languages ([046740f](https://github.com/perfect-panel/ppanel-web/commit/046740f))
* **auth-control**: Update general ([3883646](https://github.com/perfect-panel/ppanel-web/commit/3883646))
* **auth**: Add type parameter to SendCode and update related API typings ([4198871](https://github.com/perfect-panel/ppanel-web/commit/4198871))
* **auth**: Refactor mobile authentication config to support whitelist functionality ([c761ec7](https://github.com/perfect-panel/ppanel-web/commit/c761ec7))
* **device**: Modify IMEI to device identifier support ([e3f9ef6](https://github.com/perfect-panel/ppanel-web/commit/e3f9ef6))
* **imei**: Add IMEI related internationalization support and menu items ([13c3337](https://github.com/perfect-panel/ppanel-web/commit/13c3337))
* **locales**: Add kick offline confirmation and success messages in multiple languages ([5db5343](https://github.com/perfect-panel/ppanel-web/commit/5db5343))
* **locales**: Update 'sms' to 'mobile' in authentication methods across multiple languages ([fea2171](https://github.com/perfect-panel/ppanel-web/commit/fea2171))
* **log**: Add message log retrieval functionality and update related typings ([1c0ecae](https://github.com/perfect-panel/ppanel-web/commit/1c0ecae))
* **profile**:  Update localization strings and enhance third-party account binding ([2d1effb](https://github.com/perfect-panel/ppanel-web/commit/2d1effb))
* **release**: Extend supported platforms for Docker images, closes [#9](https://github.com/perfect-panel/ppanel-web/issues/9) ([e3a31eb](https://github.com/perfect-panel/ppanel-web/commit/e3a31eb))
* **subscription**: Add delete user subscription functionality ([1fc3a10](https://github.com/perfect-panel/ppanel-web/commit/1fc3a10))
* **ui**: Update input components and enhance card minimum width for better layout ([8a02310](https://github.com/perfect-panel/ppanel-web/commit/8a02310))
* **user**: Add user Detail ([3a3d223](https://github.com/perfect-panel/ppanel-web/commit/3a3d223))
* **user**: Add User Detail ([fdaf11b](https://github.com/perfect-panel/ppanel-web/commit/fdaf11b))


### 🐛 Bug Fixes

* **auth-control**: Fix citation error for platform values ([c940f3c](https://github.com/perfect-panel/ppanel-web/commit/c940f3c))
* **auth-control**: Fix citation error for platform values ([28813d2](https://github.com/perfect-panel/ppanel-web/commit/28813d2))
* **auth-control**: Rename phone_variable to phone_number in mobile verification configuration ([e5455aa](https://github.com/perfect-panel/ppanel-web/commit/e5455aa))
* **auth**: Update authentication configuration and localization strings ([47f2c58](https://github.com/perfect-panel/ppanel-web/commit/47f2c58))
* **locales**: Update expiration time description from minutes to seconds in multiple languages ([5bac933](https://github.com/perfect-panel/ppanel-web/commit/5bac933))
* **notify**: Ensure user info is updated after notification settings submission ([9bc3a94](https://github.com/perfect-panel/ppanel-web/commit/9bc3a94))
* **notify**: Set default values for notification settings to false ([3652819](https://github.com/perfect-panel/ppanel-web/commit/3652819))
* **third-party-accounts**: Remove mobile display logic from third-party accounts component ([b4946f7](https://github.com/perfect-panel/ppanel-web/commit/b4946f7))
* **third-party-accounts**: Update redirect property name in binding response handling ([012e83a](https://github.com/perfect-panel/ppanel-web/commit/012e83a))
* **user**: Refactor user form validation and reset password fields ([6733fc2](https://github.com/perfect-panel/ppanel-web/commit/6733fc2))
* **user**: Update locales ([4e7d249](https://github.com/perfect-panel/ppanel-web/commit/4e7d249))
* **user**: Update notification and verify code settings ([574b043](https://github.com/perfect-panel/ppanel-web/commit/574b043))


### 💄 Styles

* **dashboard**: Enhance card components with full height and improved empty state handling ([ec12fc1](https://github.com/perfect-panel/ppanel-web/commit/ec12fc1))

<a name="readme-top"></a>

# Changelog

# [1.0.0-beta.7](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2025-01-28)

### ♻ Code Refactoring

- **sbscribe**: Rename and reorganize components for better structure and clarity ([5e5e4ed](https://github.com/perfect-panel/ppanel-web/commit/5e5e4ed))

### ✨ Features

- **auth**: Add email and SMS code sending functionality with localization updates ([57eaa55](https://github.com/perfect-panel/ppanel-web/commit/57eaa55))
- **auth**: Add Oauth configuration for Telegram, Facebook, Google, Github, and Apple ([18ee600](https://github.com/perfect-panel/ppanel-web/commit/18ee600))
- **auth**: Add SMS and email configuration options to global store and update localization ([4acf7b1](https://github.com/perfect-panel/ppanel-web/commit/4acf7b1))
- **auth**: Enhance user registration with invite handling and logo display ([207bc24](https://github.com/perfect-panel/ppanel-web/commit/207bc24))
- **auth**: Redirect user after OAuth login and add logos icon collection ([aa6dda8](https://github.com/perfect-panel/ppanel-web/commit/aa6dda8))
- **config**: Add application selection and encryption settings to configuration form ([88b3504](https://github.com/perfect-panel/ppanel-web/commit/88b3504))
- **config**: Update encryption fields in configuration form and refactor OAuth callback parameters ([652e032](https://github.com/perfect-panel/ppanel-web/commit/652e032))
- **global**: Add SMS configuration options to global store ([39a9ce6](https://github.com/perfect-panel/ppanel-web/commit/39a9ce6))
- **locales**: Add area code and telephone fields to user forms in multiple languages ([9b8258c](https://github.com/perfect-panel/ppanel-web/commit/9b8258c))
- **locales**: Add description information of communication keys and encryption methods to enhance client configuration capabilities ([d1f5a9b](https://github.com/perfect-panel/ppanel-web/commit/d1f5a9b))
- **node**: Add tags ([f408fdf](https://github.com/perfect-panel/ppanel-web/commit/f408fdf))
- **node**: Move the node configuration to the server module ([7f0f5ce](https://github.com/perfect-panel/ppanel-web/commit/7f0f5ce))
- **oauth**: Add certification component for handling OAuth login callbacks and improve user authentication flow ([5ed04c0](https://github.com/perfect-panel/ppanel-web/commit/5ed04c0))
- **oauth**: Implement OAuth token retrieval and refactor login callback handling ([40a6f7c](https://github.com/perfect-panel/ppanel-web/commit/40a6f7c))
- **oauth**: Refactor platform parameter handling and improve logout redirection logic ([8346c85](https://github.com/perfect-panel/ppanel-web/commit/8346c85))
- **oauth**: Update OAuth login handling to use callback parameter and improve URL parameter retrieval ([9227411](https://github.com/perfect-panel/ppanel-web/commit/9227411))
- **sms**: Update locales ([938363b](https://github.com/perfect-panel/ppanel-web/commit/938363b))
- **subscribe**: Add 'sold' column to SubscribeTable and update inventory terminology ([19619fd](https://github.com/perfect-panel/ppanel-web/commit/19619fd))
- **subscribe**: Move subscription configuration and application to subscription module ([f90d4d2](https://github.com/perfect-panel/ppanel-web/commit/f90d4d2))
- **subscribe**: Update SubscribeTable component to use API.SubscribeItem type and ensure proper type casting ([f26f1c2](https://github.com/perfect-panel/ppanel-web/commit/f26f1c2))
- **tutorial**: Fetch the latest tutorial version from GitHub API for dynamic URL generation ([28f8c78](https://github.com/perfect-panel/ppanel-web/commit/28f8c78))
- **user**: Add telephone input with area code selection and update localization ([585b99c](https://github.com/perfect-panel/ppanel-web/commit/585b99c))
- Update Auth Control ([c59742a](https://github.com/perfect-panel/ppanel-web/commit/c59742a))

### 🐛 Bug Fixes

- **api**: Remove redundant requestType parameter in appleLoginCallback ([0aa5d5b](https://github.com/perfect-panel/ppanel-web/commit/0aa5d5b))
- **api**: Rename app-related functions and types to application for consistency ([9d8b814](https://github.com/perfect-panel/ppanel-web/commit/9d8b814))
- **api**: Update subscription_protocol to subscribe_type for consistency across services ([b6da51b](https://github.com/perfect-panel/ppanel-web/commit/b6da51b))
- **auth**: Change Textarea value to defaultValue for client_secret in Apple auth page ([69fc670](https://github.com/perfect-panel/ppanel-web/commit/69fc670))
- **auth**: Remove unused telephone code login function and update typings for telephone login requests ([7239685](https://github.com/perfect-panel/ppanel-web/commit/7239685))
- **auth**: Require minimum length for invite string when forced invite is enabled ([a604f28](https://github.com/perfect-panel/ppanel-web/commit/a604f28))
- **auth**: Update user authentication flow to include email and phone code verification ([5d078fd](https://github.com/perfect-panel/ppanel-web/commit/5d078fd))
- **dashboard**: Improve URL encoding for subscription links and enhance success message handling ([4983c33](https://github.com/perfect-panel/ppanel-web/commit/4983c33))
- **dashboard**: Update icon imports for platform consistency and adjust icon size ([3e8912e](https://github.com/perfect-panel/ppanel-web/commit/3e8912e))
- **dashboard**: Update platform detection logic and improve layout responsiveness ([b0aa364](https://github.com/perfect-panel/ppanel-web/commit/b0aa364))
- **deps**: Remove outdated @iconify/react dependency and add iconify-json packages ([d6fbc38](https://github.com/perfect-panel/ppanel-web/commit/d6fbc38))
- **locales**: Add error message for incorrect user information ([52c1d1f](https://github.com/perfect-panel/ppanel-web/commit/52c1d1f))
- **locales**: Add error message for incorrect user information ([3d92902](https://github.com/perfect-panel/ppanel-web/commit/3d92902))
- **locales**: Add logout message to authentication localization files ([1d0d911](https://github.com/perfect-panel/ppanel-web/commit/1d0d911))
- **nav**: Comment out unused social login options to simplify navigation configuration ([cefcb31](https://github.com/perfect-panel/ppanel-web/commit/cefcb31))
- **node-config**: Add null checks for time slots and ensure proper handling of undefined values ([1cdb7e7](https://github.com/perfect-panel/ppanel-web/commit/1cdb7e7))
- **node**: Add country and city fields to the form schema and localization files ([8775fb6](https://github.com/perfect-panel/ppanel-web/commit/8775fb6))
- **oauth**: Refactor OAuth configuration types and update related API methods ([6227ba9](https://github.com/perfect-panel/ppanel-web/commit/6227ba9))
- **oauth**: Remove redundant checks when updating configuration to simplify logic ([9140b8a](https://github.com/perfect-panel/ppanel-web/commit/9140b8a))
- **payment**: Replace window.open with window.location.href for checkout links ([1d8c765](https://github.com/perfect-panel/ppanel-web/commit/1d8c765))
- **phone**: Update SMS expiration time field to use 'sms_expire_time' with default value of 300 ([18b07c7](https://github.com/perfect-panel/ppanel-web/commit/18b07c7))
- **redirect**: Simplify redirect URL logic by removing unnecessary condition for sessionStorage ([c53ac61](https://github.com/perfect-panel/ppanel-web/commit/c53ac61))
- **redirect**: Update redirect URL logic to ensure proper handling of OAuth and auth paths ([7954762](https://github.com/perfect-panel/ppanel-web/commit/7954762))
- **site**: Add image upload functionality for site logo configuration ([4ea6e4a](https://github.com/perfect-panel/ppanel-web/commit/4ea6e4a))
- **sort**: Refactor sorting logic in NodeTable and SubscribeTable components for improved clarity and performance ([331bbea](https://github.com/perfect-panel/ppanel-web/commit/331bbea))
- **subscription**: Add reset functionality for user subscription token ([39e89bf](https://github.com/perfect-panel/ppanel-web/commit/39e89bf))
- **type**: Fix ts type check error ([3cb0629](https://github.com/perfect-panel/ppanel-web/commit/3cb0629))
- **user-nav**: Update user avatar and label to display telephone if email is not available ([7b6bb7b](https://github.com/perfect-panel/ppanel-web/commit/7b6bb7b))
- **user**: Update user identifier field and localizations ([1b6befa](https://github.com/perfect-panel/ppanel-web/commit/1b6befa))

### 💄 Styles

- **dashboard**: Adjust grid layout and update image dimensions in application display ([f3204b7](https://github.com/perfect-panel/ppanel-web/commit/f3204b7))
- **globals**: Refactor delete confirmation button and update badge styles in node and subscribe tables ([30ae781](https://github.com/perfect-panel/ppanel-web/commit/30ae781))
- Update node secret UI and add telephone code field to authentication form ([770932e](https://github.com/perfect-panel/ppanel-web/commit/770932e))

<a name="readme-top"></a>

# Changelog

# [1.0.0-beta.6](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2025-01-10)

### 🐛 Bug Fixes

- **auth**: Update UserCheckForm to use setInitialValues and modify onSubmit type ([c984c0d](https://github.com/perfect-panel/ppanel-web/commit/c984c0d))

# [1.0.0-beta.5](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2025-01-09)

### ✨ Features

- **locales**: Replace 'nodeGroupId' with 'groupId' in multiple language files for consistency ([a4e9d5d](https://github.com/perfect-panel/ppanel-web/commit/a4e9d5d))
- **locales**: Update 'deductBalance' to 'giftAmount' across multiple languages and fix newline in announcement.json ([70497af](https://github.com/perfect-panel/ppanel-web/commit/70497af))
- **stats**: Replace dynamic stat fetching with environment constants for user, server, and location counts ([46ae166](https://github.com/perfect-panel/ppanel-web/commit/46ae166))
- **subscribe**: Update suffix from 'MB' to 'Mbps' and enhance speed limit display logic ([3547bb1](https://github.com/perfect-panel/ppanel-web/commit/3547bb1))
- **user**: Add 'gift_amount' field and update related references in user services and components ([b13c77e](https://github.com/perfect-panel/ppanel-web/commit/b13c77e))

### 🎫 Chores

- **deps**: Update package dependencies across multiple projects for improved stability and performance ([b01a5bc](https://github.com/perfect-panel/ppanel-web/commit/b01a5bc))
- **ui**: Update package dependencies for improved stability and performance ([25da429](https://github.com/perfect-panel/ppanel-web/commit/25da429))

### 🐛 Bug Fixes

- **api**: Replace 'deduction' with 'gift_amount' and add 'commission' field in type definitions ([77edf1d](https://github.com/perfect-panel/ppanel-web/commit/77edf1d))
- **api**: Update API type definitions to replace 'deduction' with 'gift_amount' and make 'commission' field optional ([c2af060](https://github.com/perfect-panel/ppanel-web/commit/c2af060))
- **auth**: Refactor user authentication forms to remove global store dependency and improve type handling ([12026b0](https://github.com/perfect-panel/ppanel-web/commit/12026b0))
- **coupon**: Rename 'server' field to 'subscribe' in coupon form and update coupon update request type ([f8b6d82](https://github.com/perfect-panel/ppanel-web/commit/f8b6d82))
- **types**: Add 'gift_amount' field to API type definitions ([8f8a12a](https://github.com/perfect-panel/ppanel-web/commit/8f8a12a))
- **user**: Add the 'gift_amount' field to the user service's type definition ([6301409](https://github.com/perfect-panel/ppanel-web/commit/6301409))

<a name="readme-top"></a>

# Changelog

# [1.0.0-beta.4](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2025-01-07)

### ♻ Code Refactoring

- **auth**: Refactor user authorization handling and improve error logging ([68bc18f](https://github.com/perfect-panel/ppanel-web/commit/68bc18f))

### ✨ Features

- **affiliate**: Add Affiliate component with commission display and invite link functionality ([4aea4e8](https://github.com/perfect-panel/ppanel-web/commit/4aea4e8))
- **affiliate**: Update affiliate component to display total commission and improve data fetching ([cc834ca](https://github.com/perfect-panel/ppanel-web/commit/cc834ca))
- **api**: Add new subscription properties and locale support for deduction ratios and reset cycles ([fec80f5](https://github.com/perfect-panel/ppanel-web/commit/fec80f5))
- **api**: Add Time Period Configuration ([837157c](https://github.com/perfect-panel/ppanel-web/commit/837157c))
- **favicon**: Update SVG favicon design for admin and user interfaces ([1d91738](https://github.com/perfect-panel/ppanel-web/commit/1d91738))
- **node**: Add serverKey ([25ce37e](https://github.com/perfect-panel/ppanel-web/commit/25ce37e))
- **relay**: Add relay mode configuration and update related schemas ([3cc9477](https://github.com/perfect-panel/ppanel-web/commit/3cc9477))
- **schema**: Add security field to hysteria2 and tuic schemas ([cd59d44](https://github.com/perfect-panel/ppanel-web/commit/cd59d44))
- **subscribe**: Add reset_time to API typings and update unsubscribe logic ([eeea165](https://github.com/perfect-panel/ppanel-web/commit/eeea165))
- **subscribe**: Add subscribe_discount type ([f99c604](https://github.com/perfect-panel/ppanel-web/commit/f99c604))
- **subscribe**: Add subscription credits ([5bc7905](https://github.com/perfect-panel/ppanel-web/commit/5bc7905))
- **subscribe**: Add unsubscribe functionality with confirmation messages and localized strings ([b2a2f42](https://github.com/perfect-panel/ppanel-web/commit/b2a2f42))
- **subscribe**: Improve error handling in subscription forms and update component props ([d28a10b](https://github.com/perfect-panel/ppanel-web/commit/d28a10b))
- **subscribe**: Improve layout and styling in subscription components ([5766376](https://github.com/perfect-panel/ppanel-web/commit/5766376))
- **subscription**: Add localized messages for existing subscriptions and deletion restrictions ([e8a72d5](https://github.com/perfect-panel/ppanel-web/commit/e8a72d5))

### 🎫 Chores

- Update changelog, enhance prepare script, and add openapi command ([a93db4e](https://github.com/perfect-panel/ppanel-web/commit/a93db4e))

### 🐛 Bug Fixes

- **dashboard**: Correct progress value calculations and update groupId accessor ([36c7667](https://github.com/perfect-panel/ppanel-web/commit/36c7667))
- **layout**: Remove unnecessary cookie initialization in Logout function ([3065c3a](https://github.com/perfect-panel/ppanel-web/commit/3065c3a))
- **locales**: Update Hong Kong ([6d0d069](https://github.com/perfect-panel/ppanel-web/commit/6d0d069))
- **subscribe**: Update value validation to check for number type in subscribe form ([6de29d5](https://github.com/perfect-panel/ppanel-web/commit/6de29d5))

### 💄 Styles

- **locales**: Remove unused subscription labels from multiple locale files ([fb0c510](https://github.com/perfect-panel/ppanel-web/commit/fb0c510))
- **locales**: Update server.json to reorganize relay mode options and improve labels ([701cdee](https://github.com/perfect-panel/ppanel-web/commit/701cdee))
- **node**: Improve layout and spacing in NodeStatusCell component ([136287d](https://github.com/perfect-panel/ppanel-web/commit/136287d))
- **time-slot**: Add chart display ([c44ad47](https://github.com/perfect-panel/ppanel-web/commit/c44ad47))

<a name="readme-top"></a>

# Changelog

# [1.0.0-beta.3](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2024-12-26)

### ♻ Code Refactoring

- **publish**: Simplify environment variable handling and improve build script ([88ea21b](https://github.com/perfect-panel/ppanel-web/commit/88ea21b))

# [1.0.0-beta.2](https://github.com/perfect-panel/ppanel-web/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2024-12-26)

### 👷 Build System

- **config**: Update pm2 config ([d95b425](https://github.com/perfect-panel/ppanel-web/commit/d95b425))

### 🔧 Continuous Integration

- **step**: Update step name ([9eca618](https://github.com/perfect-panel/ppanel-web/commit/9eca618))

# 1.0.0-beta.1 (2024-12-25)

### ♻ Code Refactoring

- **api**: Sort and Announcement ([38d5616](https://github.com/perfect-panel/ppanel-web/commit/38d5616))
- **config**: GenerateMetadata ([a0bb101](https://github.com/perfect-panel/ppanel-web/commit/a0bb101))
- **config**: Viewport ([24b8601](https://github.com/perfect-panel/ppanel-web/commit/24b8601))
- **core**: Restructure project for better module separation ([9d0cb8b](https://github.com/perfect-panel/ppanel-web/commit/9d0cb8b))
- **deps**: Update ([19837a1](https://github.com/perfect-panel/ppanel-web/commit/19837a1))
- **empty**: Content ([aa4c667](https://github.com/perfect-panel/ppanel-web/commit/aa4c667))
- **ui**: Dependencies ([727d779](https://github.com/perfect-panel/ppanel-web/commit/727d779))
- **ui**: Layout ([9262d7d](https://github.com/perfect-panel/ppanel-web/commit/9262d7d))

### ⚡ Performance Improvements

- **subscribe**: Form discount price ([059a892](https://github.com/perfect-panel/ppanel-web/commit/059a892))

### ✨ Features

- **ad**: Advertise ([b1105cd](https://github.com/perfect-panel/ppanel-web/commit/b1105cd))
- **affiliate**: Affiliate Detail ([a782c17](https://github.com/perfect-panel/ppanel-web/commit/a782c17))
- **affiliate**: Commission Rate ([5eec430](https://github.com/perfect-panel/ppanel-web/commit/5eec430))
- **announcement**: Popup and pinned ([f3680a7](https://github.com/perfect-panel/ppanel-web/commit/f3680a7))
- **api**: Telegram ([17ce96a](https://github.com/perfect-panel/ppanel-web/commit/17ce96a))
- **billing**: Update Billing ([078fc9d](https://github.com/perfect-panel/ppanel-web/commit/078fc9d))
- **config**: FormatBytes ([9251a09](https://github.com/perfect-panel/ppanel-web/commit/9251a09))
- **config**: Protocol type ([a3b45b4](https://github.com/perfect-panel/ppanel-web/commit/a3b45b4))
- **config**: Webhook Domain ([01e06c6](https://github.com/perfect-panel/ppanel-web/commit/01e06c6))
- **dashboard**: Optimization ([5b3f4b4](https://github.com/perfect-panel/ppanel-web/commit/5b3f4b4))
- **dashboard**: Statistics ([2926abc](https://github.com/perfect-panel/ppanel-web/commit/2926abc))
- **header**: Update locales ([bfb6c27](https://github.com/perfect-panel/ppanel-web/commit/bfb6c27))
- **locale**: Add Persian ([93a0a88](https://github.com/perfect-panel/ppanel-web/commit/93a0a88))
- **locales**: Add multiple languages ([b243ab9](https://github.com/perfect-panel/ppanel-web/commit/b243ab9))
- **node-subscription**: Add copy functionality for columns ([3a81e37](https://github.com/perfect-panel/ppanel-web/commit/3a81e37))
- **node**: Add NodeStatus ([c712624](https://github.com/perfect-panel/ppanel-web/commit/c712624))
- **node**: Add protocol ([301b635](https://github.com/perfect-panel/ppanel-web/commit/301b635))
- **node**: Add status ([c06372b](https://github.com/perfect-panel/ppanel-web/commit/c06372b))
- **subscribe**: Add unit time ([39d07ec](https://github.com/perfect-panel/ppanel-web/commit/39d07ec))
- **table**: Add sorting support for Node and subscription columns ([27924b0](https://github.com/perfect-panel/ppanel-web/commit/27924b0))
- **table**: Supports drag and drop sorting ([2f56ef5](https://github.com/perfect-panel/ppanel-web/commit/2f56ef5))
- **tos**: Display data ([6024454](https://github.com/perfect-panel/ppanel-web/commit/6024454))
- **tutorial**: Add common tutorial list ([872252c](https://github.com/perfect-panel/ppanel-web/commit/872252c))
- **ui**: System Tool ([1836980](https://github.com/perfect-panel/ppanel-web/commit/1836980))
- **ui**: Update homepage data ([8425b13](https://github.com/perfect-panel/ppanel-web/commit/8425b13))

### 🎫 Chores

- **config**: Entry locale ([5737331](https://github.com/perfect-panel/ppanel-web/commit/5737331))
- **init**: Project initialization ([829edfa](https://github.com/perfect-panel/ppanel-web/commit/829edfa))

### 🐛 Bug Fixes

- **api**: PreCreateOrder ([ca747f5](https://github.com/perfect-panel/ppanel-web/commit/ca747f5))
- **api**: Purge ([98c1c30](https://github.com/perfect-panel/ppanel-web/commit/98c1c30))
- **api**: Server and order ([255bd82](https://github.com/perfect-panel/ppanel-web/commit/255bd82))
- **api**: Statistics ([7962162](https://github.com/perfect-panel/ppanel-web/commit/7962162))
- **api**: Subscribe token ([1932ba7](https://github.com/perfect-panel/ppanel-web/commit/1932ba7))
- **api**: Update Model ([39aaa73](https://github.com/perfect-panel/ppanel-web/commit/39aaa73))
- **billing**: ExpiryDate ([e85e545](https://github.com/perfect-panel/ppanel-web/commit/e85e545))
- **billing**: I18n and styles ([81e0f21](https://github.com/perfect-panel/ppanel-web/commit/81e0f21))
- **config**: AlipayF2F ([6c07107](https://github.com/perfect-panel/ppanel-web/commit/6c07107))
- **config**: Bugs ([f57e40c](https://github.com/perfect-panel/ppanel-web/commit/f57e40c))
- **config**: Checkout Order ([a31e763](https://github.com/perfect-panel/ppanel-web/commit/a31e763))
- **config**: FormatBytes ([bbc2da0](https://github.com/perfect-panel/ppanel-web/commit/bbc2da0))
- **config**: NoStore ([2cc18cf](https://github.com/perfect-panel/ppanel-web/commit/2cc18cf))
- **config**: Runtime env ([a1e4999](https://github.com/perfect-panel/ppanel-web/commit/a1e4999))
- **config**: Status Percentag ([8f322fb](https://github.com/perfect-panel/ppanel-web/commit/8f322fb))
- **config**: SubLink ([1c61966](https://github.com/perfect-panel/ppanel-web/commit/1c61966))
- **config**: Subscribe Link ([11ea821](https://github.com/perfect-panel/ppanel-web/commit/11ea821))
- **controller**: Order status ([8c6a097](https://github.com/perfect-panel/ppanel-web/commit/8c6a097))
- **dashboard**: Format Bytes ([d8b0bd9](https://github.com/perfect-panel/ppanel-web/commit/d8b0bd9))
- **deps**: Typescript config ([34e24b8](https://github.com/perfect-panel/ppanel-web/commit/34e24b8))
- **deps**: Update clipboard ([5572710](https://github.com/perfect-panel/ppanel-web/commit/5572710))
- **editor**: Change value ([4fdfeb2](https://github.com/perfect-panel/ppanel-web/commit/4fdfeb2))
- **footer**: Email address ([a451f44](https://github.com/perfect-panel/ppanel-web/commit/a451f44))
- **locale**: Default value ([937408f](https://github.com/perfect-panel/ppanel-web/commit/937408f))
- **locale**: Document ([6f0fa20](https://github.com/perfect-panel/ppanel-web/commit/6f0fa20))
- **locale**: Empty ([3832d20](https://github.com/perfect-panel/ppanel-web/commit/3832d20))
- **locale**: Input Placeholder Webhook Domain ([bca0935](https://github.com/perfect-panel/ppanel-web/commit/bca0935))
- **locale**: Language Select ([0befdb0](https://github.com/perfect-panel/ppanel-web/commit/0befdb0))
- **locale**: Subscription Path Description ([4c67387](https://github.com/perfect-panel/ppanel-web/commit/4c67387))
- **metadata**: Global metadata ([15d5ecf](https://github.com/perfect-panel/ppanel-web/commit/15d5ecf))
- **node**: Locale and form ([38be4d5](https://github.com/perfect-panel/ppanel-web/commit/38be4d5))
- **node**: Port config ([a20834a](https://github.com/perfect-panel/ppanel-web/commit/a20834a))
- **node**: Reality config ([fadd17f](https://github.com/perfect-panel/ppanel-web/commit/fadd17f))
- **node**: Service Name config ([d0be685](https://github.com/perfect-panel/ppanel-web/commit/d0be685))
- **node**: TLS config ([57fae12](https://github.com/perfect-panel/ppanel-web/commit/57fae12))
- **node**: Trojan protocol config ([7e1eb90](https://github.com/perfect-panel/ppanel-web/commit/7e1eb90))
- **payment**: Config and types ([b0c87fb](https://github.com/perfect-panel/ppanel-web/commit/b0c87fb))
- **payment**: Qrcode ([a9a535b](https://github.com/perfect-panel/ppanel-web/commit/a9a535b))
- **request**: Locale ([37d408f](https://github.com/perfect-panel/ppanel-web/commit/37d408f))
- **subscribe**: Discount ([35a9f69](https://github.com/perfect-panel/ppanel-web/commit/35a9f69))
- **subscribe**: Extract Domain ([40d61a9](https://github.com/perfect-panel/ppanel-web/commit/40d61a9))
- **subscribe**: Jumps and internationalization ([13fdec3](https://github.com/perfect-panel/ppanel-web/commit/13fdec3))
- **subscribe**: Server group id ([90e6764](https://github.com/perfect-panel/ppanel-web/commit/90e6764))
- **turnstile**: Turnstile_site_key ([0327b73](https://github.com/perfect-panel/ppanel-web/commit/0327b73))
- **types**: Checking ([2992824](https://github.com/perfect-panel/ppanel-web/commit/2992824))
- **types**: Order type ([c7e50a9](https://github.com/perfect-panel/ppanel-web/commit/c7e50a9))
- **ui**: Bugs ([b023d0f](https://github.com/perfect-panel/ppanel-web/commit/b023d0f))
- **ui**: Components ([a7927d7](https://github.com/perfect-panel/ppanel-web/commit/a7927d7))
- **ui**: Fix json formatting ([e1ddd94](https://github.com/perfect-panel/ppanel-web/commit/e1ddd94))
- **utils**: Login redirect url ([cbe5f0d](https://github.com/perfect-panel/ppanel-web/commit/cbe5f0d))

### 💄 Styles

- **document**: Update ([0a8109b](https://github.com/perfect-panel/ppanel-web/commit/0a8109b))
- **node**: Form ([d5f5add](https://github.com/perfect-panel/ppanel-web/commit/d5f5add))
- **node**: Protocol Tab ([2bcb925](https://github.com/perfect-panel/ppanel-web/commit/2bcb925))
- **ui**: Update mobile style ([eda18bc](https://github.com/perfect-panel/ppanel-web/commit/eda18bc))

### 📝 Documentation

- **readme**: License name ([74cb16b](https://github.com/perfect-panel/ppanel-web/commit/74cb16b))

### 🔧 Continuous Integration

- **github**: Release docker ([5af60aa](https://github.com/perfect-panel/ppanel-web/commit/5af60aa))
