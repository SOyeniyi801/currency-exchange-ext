# Currency Exchange Chrome Extension

This Chrome extension allows users to convert between different currencies using the [API Ninjas Convert Currency API](https://api-ninjas.com/api/convertcurrency).

## Features

- Convert USD to 4 currencies: AUD, CHF, GBD, DKK
- Real-time exchange rates.
- Simple and easy-to-use interface.

## Installation

1. Clone the repository or download the ZIP file.
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the extension directory.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Enter the amount and select the currencies you want to convert from and to.
3. Click "Convert" to see the converted amount.

## API Key

You will need to sign up at [API Ninjas](https://api-ninjas.com/) to get your API key. Once you have your API key, replace `'YOUR_API_KEY'` in `background.js` with your actual API key.

```javascript
const apiKey = 'YOUR_API_KEY';