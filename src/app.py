# python -m venv myenv
# source myenv/bin/activate  # On Windows use `myenv\Scripts\activate`
# pip install -r requirements.txt
import asyncio
import os
from GreenapiClass import GreenapiClass  # Corrected import statement

async def testsendMessage():
    myGreen = GreenapiClass()
    message = 'בדיקה של שגיא'
    response = await myGreen.sendMessage(os.environ.get('TEST_NUMBER'), message)    
    
    if response:
        print(response)
    else:
        print("Failed to get a response from Green API.")

async def sendMessagewithFile():
    myGreen = GreenapiClass()
    message = 'בדיקה של שליחת קובץ mp3ל'    
    response = await myGreen.sendMessagewithFile(os.environ.get('TEST_NUMBER'), message, os.environ.get('MP3_TEST_URL'))    
    
    if response:
        print(response)
    else:
        print("Failed to get a response from Green API.")        

if __name__ == "__main__":
    # asyncio.run(testsendMessage())
    asyncio.run(sendMessagewithFile())