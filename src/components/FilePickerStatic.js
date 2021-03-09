import React, {useState} from 'react'
import {FilePicker} from 'react-file-picker-ui'
import FileSystem from './FileSystem'
import {FaFilePdf, FaFileVideo, FaFileAudio, FaFileWord} from 'react-icons/fa'


function FilePickerStatic() {

    const [fpOpen,setFpOpen] = useState(false);
    const [selectedPath,setSelectedPath] = useState('')
    const filtersArray = ["mp4","mp3","wav","aac","mkv","avi","pdf","doc","docx"]
    const iconsObj = {
        "mp4" : <FaFileVideo/>,
        "mkv" : <FaFileVideo/>,
        "avi" : <FaFileVideo/>,
        "mp3" : <FaFileAudio/>,
        "wav" : <FaFileAudio/>,
        "aac" : <FaFileAudio/>,
        "pdf" : <FaFilePdf/>,
        "doc" : <FaFileWord/>,
        "docx" : <FaFileWord/>
    }

    return (
        <React.Fragment>
        <h2>Selected path : {selectedPath}</h2>
        <button onClick = {() => setFpOpen(!fpOpen)}>Show File Picker</button>
        <FilePicker 
            show={fpOpen} 
            setShow={setFpOpen} 
            scanDir={FileSystem().scanDir} 
            setSelectedPath={setSelectedPath} 
            filters={filtersArray} 
            iconsObj={iconsObj}
        />
        <p>Options Set:</p>

        <div>
            <pre>
                const filtersArray = [
                    "mp4",
                    "mp3",
                    "wav",
                    "aac",
                    "mkv",
                    "avi",
                    "pdf",
                    "doc",
                    "docx"
                ]
            </pre>
        </div>

        <div>
            <pre>
                {`const iconsObj = {
                    "mp4" : <FaFileVideo/>,
                    "mkv" : <FaFileVideo/>,
                    "avi" : <FaFileVideo/>,
                    "mp3" : <FaFileAudio/>,
                    "wav" : <FaFileAudio/>,
                    "aac" : <FaFileAudio/>,
                    "pdf" : <FaFilePdf/>,
                    "doc" : <FaFileWord/>,
                    "docx" : <FaFileWord/>
                }`}
            </pre>
        </div>
        <p>
            The File Picker is naviagting on a static DirectoryTree Object returned by <a href="github.com/SwapnilB31/node-file-tree">node-file-tree-explorer's</a> listDirectoryFromPath() method
        </p>
        </React.Fragment>
    )
}

export default FilePickerStatic