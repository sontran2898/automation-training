# Automation Training

Playwright + TypeScript automation training project. It automates the sample test cases against
[the-internet.herokuapp.com](https://the-internet.herokuapp.com) using the Page Object Model (POM) and Playwright fixtures.

## Prerequisites

- [Node.js](https://nodejs.org) (LTS)
- Git

## Setup

```bash
git clone https://github.com/sontran2898/automation-training.git
cd automation-training
npm install
npx playwright install chromium
```

## Run the tests

```bash
# all tests (Chromium)
npx playwright test --project=chromium

# a single test case, e.g. TC04
npx playwright test -g "TC04" --project=chromium

# watch the browser while it runs
npx playwright test -g "TC04" --project=chromium --headed

# open the last HTML report
npx playwright show-report
```

## Project structure

```
.
├── fixtures/   Playwright fixtures that create the page objects (*.fixture.ts)
├── pages/      Page objects: locators and actions for each page (*.page.ts)
├── tests/      Test specs, contain the steps and assertions (*.spec.ts)
├── download/   Test data for upload (bb.txt); downloaded files are saved here and git-ignored
└── playwright.config.ts
```

Each test case follows the same pattern: the **spec** calls methods of a **page object** that is provided by a **fixture**,
and the assertions stay in the spec.

## Test cases

| ID | Test case | Spec |
|----|-----------|------|
| TC01 | Form Authentication - Login successful with valid credentials | `tests/login.spec.ts` |
| TC02 | Form Authentication - Login fail with invalid credentials | `tests/login.spec.ts` |
| TC03 | Checkboxes - Check to a box | `tests/checkboxes.spec.ts` |
| TC04 | Dropdown - Select single option | `tests/dropdown.spec.ts` |
| TC05 | Dropdown - Select multiple options | `tests/multiSelect.spec.ts` |
| TC06 | Hyperlink - Status codes navigation | `tests/statusCodes.spec.ts` |
| TC07 | Upload a file | `tests/upload.spec.ts` |
| TC08 | Web Table - Validate largest due person from a table | `tests/webTable.spec.ts` |
| TC09 | Drag & Drop columns | `tests/dragAndDrop.spec.ts` |
| TC10 | Horizontal Slider - Set value to 3.5 | `tests/slider.spec.ts` |
| TC11 | Right click - Context menu | `tests/contextMenu.spec.ts` |
| TC12 | Download a single file | `tests/download.spec.ts` |
| TC13 | Download multiple files | `tests/downloadMultiple.spec.ts` |

## Known issues

- **TC05** fails: the JS Bin page it uses is protected by a Cloudflare bot check, so the browser never reaches the `#fruits` element.
- **TC12 / TC13** download `image.jpeg`, `sample.txt` and `test.txt` instead of the files named in the test case
  (`Jpeg_with_exif.jpeg`, `doc.txt`, `bb.txt`), because those files are no longer listed on the download page.
