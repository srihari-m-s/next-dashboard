import React, {useState} from 'react';
import { LanguagesList } from '../../lib/form';
import styles from '../styles/UploadForm.module.css';
import { Inter } from 'next/font/google';
import axios from 'axios';
import { RiUploadCloud2Line } from "react-icons/ri";
import {GoDownload} from 'react-icons/go';

const inter = Inter({ subsets: ['latin'] })

export default function UploadForm() {

    const [uploadedFile, setUploadedFile] = useState({});
    const [loaded, setLoaded] = useState();
    const [receivedFileName, setreceivedFileName] = useState("");

    async function handleSubmit(e){
        
        e.preventDefault();
        
        if(uploadedFile.name === undefined){return}

        const config = {
            onUploadProgress: function(progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded) / progressEvent.total);
                setLoaded(percentCompleted * 300);
            }
        }

        const form = e.currentTarget;
        const endpoint = form.action;
        const formData = new FormData(form);

        try{
            let response = await axios.post(endpoint, formData, config);
            let data = response.data;

            if(data.upload){                
                // Mocking processing delay from server
                setreceivedFileName("...Processing")
                setTimeout(() => {
            
                    setreceivedFileName(`Ready! ${(uploadedFile.name.replace('.','_'))}.txt`)
                    console.log("File received?", data.upload);
                    console.log("Mock transcription:", data.transcription);
                    
                }, 4000)
            }
            
        } catch (error){
            window.alert(`${error}. Please try again!`);
            console.log(`${error}. Please try again!`)
        }
    }

    function handleChange(e) {
        // logic to handle file type validation
        // If it matches store file in the state - "uploadedFile"
        setUploadedFile(e.target.files[0]);
        
        setLoaded(0);
    }

    function handleDownload(){
        {/* Logic for downloading transcription text file */}
    }


  return (
    <form action='/api/transform' method='POST' encType='multipart/form-data' onSubmit={e => handleSubmit(e)} className={styles.form}>
        <h2>Start New Transcription</h2>

        {/* input Area */}
        <div className={styles.inputArea}>
            <input type="file" id="fileElem" accept='audio/*, video/*' className={styles.visuallyHidden} onChange={e => handleChange(e)} />
            <label htmlFor="fileElem" className={styles.selectFilesButton}>Select Video/Audio files</label>
            <div className={`${styles.progressBar}`}>
                <div className={`${styles.progress}`} style={{width:loaded}}></div>
            </div>
            <p>{uploadedFile.name ? uploadedFile.name : `No file Chosen`}</p>
            <button type="submit" className={`${styles.uploadButton} ${inter.className}`}><span className={styles.uploadIcon}><RiUploadCloud2Line/></span> Upload File</button>

            {/* Mock download button */}
            <div className={styles.downloadButton} onClick={handleDownload}><span className={styles.downloadIcon}><GoDownload/></span><p>{receivedFileName || "Nothing to download"}</p></div>
        </div>

        {/* Language Selection */}
        <div className={styles.langSelection}>
            <p>Select Transcription Language</p>
            <select name="lang" id="lang" className={`${styles.langSelect} ${inter.className}`} defaultValue={"English (United Kingdom)"}>
                {LanguagesList.map(language => {
                    return <option value={language.name} className={`${styles.capitalized} ${inter.className}`} key={language.name}>{language.name}</option>
                })}
            </select>
        </div>
        
    </form>
  )
}
