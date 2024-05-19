require("dotenv").config();
const myGreen = new (require("./GreenapiClass"))();

// Main function to send a user prompt and handle the response
async function sentTextMessage(chatId, prompt) {
  result = myGreen.sendMessage(chatId, prompt);

  console.log(result);

  //console.log(`Records from view: ${viewName}`);
}

sentTextMessage(process.env.TEST_NUMBER, "בדיקה של שגיא");
