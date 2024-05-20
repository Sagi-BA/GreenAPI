import os
from whatsapp_api_client_python import API

class GreenapiClass:
    def __init__(self):
        self.result = False
        self.greenAPI = API.GreenApi(os.environ.get("GREENAPI_ID_INSTANCE"), os.environ.get("GREENAPI_ACCESS_TOKEN"))

    async def sendMessage(self, chatId, message):
        self.result = False
        print(f"Start: sendMessage({chatId}, {message})")

        try:
            response = self.greenAPI.sending.sendMessage(chatId, message)            
            if(response.code == 200):
                print(f"idMessage: {response.data['idMessage']}")
                self.result = True
        except Exception as err:
            print(f"Failed to forward to GREEN API: {err}")
        return self.result

    async def sendMessagewithFile(self, chatId, message, fileUrl):
        self.result = False
        print(f"Start: send_file_by_url({chatId}, {message}, {fileUrl})")

        try:
            response = self.greenAPI.sending.sendFileByUrl(chatId, fileUrl, "output", message)
            if(response.code == 200):
                print(f"idMessage: {response.data['idMessage']}")
                self.result = True
        except Exception as err:
            print(f"Failed to forward to GREEN API: {err}")
        return self.result
