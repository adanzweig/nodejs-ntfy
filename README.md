# adanjz-ntfy Logger

## Overview

The `adanjz-ntfy Logger` is a Node.js package that simplifies logging by sending log messages to a specified logger URL. It is designed to help you streamline the logging process in your Node.js applications.

## Installation

You can install this package using npm or yarn:

```bash
npm install adanjz-ntfy
# or
yarn add adanjz-ntfy
```

## Usage

```javascript
const { logger } = require('adanjz-ntfy');

const loggerUrl = 'https://your-logger-url.com/';
const appName = 'your-app-name';
const message = 'Log this message!';

async function logMessage() {
  try {
    const response = await logger(loggerUrl, appName, message);
    console.log('Log response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

logMessage();
```

### Parameters

- `loggerUrl` (string): The URL where the logger service is running.
- `appName` (string): The name of your application or service.
- `message` (string): The log message you want to send to the logger.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you have suggestions, improvements, or issues, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/adanzweig/nodejs-ntfy).

## Author

This package was created by [adanjz](https://github.com/adanzweig).

---

**Note**: Replace `https://your-logger-url.com/` with the actual logger URL and `your-app-name` with your application's name. Also, make sure to update the author information with your own details.
