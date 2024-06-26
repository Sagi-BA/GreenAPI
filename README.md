![Alt text](https://i.imgur.com/RhRQLLN.jpg)

# 👀 Green API WhatsApp messages

This project demonstrates how to use the [Green API](https://api.green-api.com) to send WhatsApp messages and files using both Node.js and Python. It includes examples of how to send text messages and files via URL to a specified chat.

[![Support](https://img.shields.io/badge/linktree-white?style=for-the-badge&logo=linktree&logoColor=43E55E)](https://linktr.ee/sagib?lt_utm_source=lt_share_link#373198503)
[![Support](https://img.shields.io/badge/Buy_Me_A_Coffee-white?style=for-the-badge&logo=buymeacoffee&logoColor=FFDD00)](https://buymeacoffee.com/sagibar)
[![Support](https://img.shields.io/badge/linkedin-white?style=for-the-badge&logo=linkedin&logoColor=0A66C2)](https://www.linkedin.com/in/sagi-bar-on)
[![Support](https://img.shields.io/badge/whatsapp-white?style=for-the-badge&logo=whatsapp&logoColor=25D366)](https://api.whatsapp.com/send?phone=972549995050)
[![Support](https://img.shields.io/badge/facebook-white?style=for-the-badge&logo=facebook&logoColor=0866FF)](https://www.facebook.com/sagi.baron)
[![Support](https://img.shields.io/badge/email_me-white?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:sagi.baron76@gmail.com)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API](#api)
- [Tutorial Video](#api)
- [License](#license)

## Installation

To use this project, you need to have Node.js and npm installed on your machine. Then, follow these steps:

Clone the repository to your local machine.

```bash
git clone git clone https://github.com/Sagi-BA/GreenAPI.git
cd GreenAPI
```

Install the dependencies for javascript:

```bash
npm install
```

Install the dependencies for Python:

```bash
python -m venv myenv
source myenv/bin/activate  # On Windows use `myenv\Scripts\activate`
pip install -r requirements.txt
```

## Usage

### Basic Example

Here's a basic example of how to use the GreenapiClass to send a message from JavaScript:

```javascript
require("dotenv").config();
const GreenapiClass = require("./GreenapiClass");

const greenApi = new GreenapiClass();

// Replace with your chat ID and message
const chatId = "CHAT_ID";
const message = "Hello, this is a test message!";

greenApi
  .sendMessage(chatId, message)
  .then((result) => {
    if (result) {
      console.log("Message sent successfully!");
    } else {
      console.log("Failed to send message.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Sending a File

Here's how to send a file by URL from JavaScript:

```javascript
require("dotenv").config();
const GreenapiClass = require("./GreenapiClass");

const greenApi = new GreenapiClass();

// Replace with your chat ID, message, and file URL
const chatId = "CHAT_ID";
const message = "Here is the file you requested.";
const fileUrl = "https://example.com/path/to/your/file.mp3";

greenApi
  .sendFileByUrl(chatId, message, fileUrl)
  .then((result) => {
    if (result) {
      console.log("File sent successfully!");
    } else {
      console.log("Failed to send file.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Configuration

The project uses environment variables to configure the Green API instance. Create a .env file in the root of your project and add the following variables:

```.env
GREENAPI_ENDPOINT_URL='https://api.green-api.com'
MP3_TEST_URL='XXX'
GREENAPI_ID_INSTANCE=your_instance_id
GREENAPI_ACCESS_TOKEN=your_access_token
TEST_NUMBER='XXX@c.us'
```

1. Replace your_instance_id and your_access_token with your actual Green API instance ID and access token.

2. Create a .env file in the root folder of the project. Use the [env.example](env.example) file as a template and add your environment variables.

3. Register on the Green API platform for send whatsApp message [API Key](https://console.green-api.com/)

4. To test the application, run the [app.js](./src/app.js) or [app.py](./src/app.py) file. You can change the starting JavaScript file by modifying the [launch.json](.vscode/launch.json) configuration.

## API

### Class: GreenapiClass

#### Method: sendMessage(chatId, message)

- Parameters:

  - chatId (string): The unique identifier of the chat to send the message to.
  - message (string): The content of the message to be sent.

- Returns
  - Promise<boolean>: Returns true if the message was successfully sent, otherwise false.

Example:

```javascript
greenApi.sendMessage("CHAT_ID", "Hello, World!").then((result) => {
  if (result) {
    console.log("Message sent successfully!");
  } else {
    console.log("Failed to send message.");
  }
});
```

#### Method: sendMessagewithFile(chatId, message, fileUrl)

- Parameters:

  - chatId (string): The unique identifier of the chat to send the file to.
  - message (string): The content of the message to be sent along with the file.
  - fileUrl (string): The URL of the file to be sent.

- Returns:
  - Promise<boolean>: Returns true if the file was successfully sent, otherwise false.

Example:

```javascript
greenApi
  .sendFileByUrl(
    "CHAT_ID",
    "Here is your file.",
    "https://example.com/file.mp3"
  )
  .then((result) => {
    if (result) {
      console.log("File sent successfully!");
    } else {
      console.log("Failed to send file.");
    }
  });
```

## Tutorial Video

Watch the tutorial video on YouTube:

[![Watch tutorial video on YouTube](https://i9.ytimg.com/vi/Z1s2cxPkD3M/mq1.jpg?sqp=CIzZqLIG-oaymwEmCMACELQB8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGA8gZShJMA8=&rs=AOn4CLAQZtkxXki82Sm55kvZfnlj-5aymQ)](https://www.youtube.com/watch?v=Z1s2cxPkD3M)

## License

This project is licensed under the ISC License. See the LICENSE file for details.

# I Am that I Am, I will be what I will be
