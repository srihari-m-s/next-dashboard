// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    // Backend code to extract file information,
    // process file and return transcription
    
    // If server has received file information 
    res.status(200).json({ upload: true, transcription: 'This is the text from Video/Audio file uploaded by the user' });

    // If file is not audio/video file, or other error
    // res.status(405).json({ error: `Something went wrong, please upload file again.` });

  }
}
