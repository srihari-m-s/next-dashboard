# Next-Dashboard
The project is a User dashboard for SaaS. The dashboard is for a Speech to Text service that accepts Audio/Video files from the User and uploads to server. The server processes the data and returns a text file that can be downloaded from the server.

## Dashboard
1. Select files Button
2. Upload Progress bar
3. Uploaded File name
4. Upload Button
5. Download Button
6. Transcription Language Select (Default - English (U.K))

## Current Functionality
- The dashboard allows user to select AV file using the **Select files** button. 
- The **File name** is displayed to confirm the selected file.
-  **Transcription language** can be selected from the dropdown. 
- The **Upload files button** then lets the user upload the file and selected language to the server or API endpoint. 
- Upload progress is showed in a progress bar. 
- A **Next.js API route** is used to mock the API call and response. The route checks for a **POST** request and returns mock data which is logged to the console. 
- The dashboard also mocks the delay of Speech to Text conversion from the server. When the server returns the response, the **Download button** text is changed to "Ready".

## Further Implementation
- Check File Type in a JS function to allow only Audio/Video files.
- Limit File size depending on the implementation of the service.
- Show recent uploads of the user with information.
- Use Search bar to find recent or older uploads by the user. 