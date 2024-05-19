require("dotenv").config();
const myGreen = new (require("./GreenapiClass"))();

// Main function to send a user prompt and handle the response
async function sentTextMessage(chatId, prompt) {
  result = myGreen.sendMessage(chatId, prompt);

  console.log(result);
}

async function sendFileByUrl(chatId, prompt, fileUrl) {
  result = myGreen.sendFileByUrl(chatId, prompt, fileUrl);

  console.log(result);
}

// sentTextMessage(process.env.TEST_NUMBER, "בדיקה של שגיא");
sendFileByUrl(
  process.env.TEST_NUMBER,
  "בדיקה של שליחת קובץ mp3",
  process.env.MP3_TEST_URL
);
