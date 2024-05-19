// require('dotenv').config();
const whatsAppClient = require('@green-api/whatsapp-api-client');

class GreenapiClass {
  constructor() {
    this.result = '';
    this.restAPI = whatsAppClient.restAPI({
      idInstance: process.env.GREENAPI_ID_INSTANCE,
      apiTokenInstance: process.env.GREENAPI_ACCESS_TOKEN
    });
  }

  /**
   * Sends a message to a chat using the GREEN API.
   *
   * @param {string} chatId - The unique identifier of the chat to send the message to.
   * @param {string} message - The content of the message to be sent.
   *
   * @returns {boolean} - Returns `true` if the message was successfully sent, otherwise `false`.
   *
   * @throws {Error} - If there is an error while sending the message to the GREEN API.
   */
  async sendMessage(chatId, message) {
    this.result = false;

    try {
      console.info(
        JSON.stringify({ level: 'info', message: `Start: sendMessage(${chatId}, ${message})` })
      );

      const response = await this.restAPI.message.sendMessage(chatId, null, message);
      console.log(response.idMessage);
      if (response.idMessage) this.result = true;
      //   this.restAPI.message.sendMessage(chatId, null, message)
      // .then((data) => {
      //     console.log(data);
      //   }) ;

      // console.info(JSON.stringify({level: "info", message: (`Data processed and forwarded to GREEN API: ${greenApiResponse.status} `)}));
    } catch (err) {
      console.error(
        JSON.stringify({ level: 'error', message: `Failed to forwarded to GREEN API: ${err}` })
      );
    }
    this.result;
  }
}
module.exports = GreenapiClass;