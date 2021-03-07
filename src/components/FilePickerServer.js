import React, {useState} from 'react'
import {FilePicker} from 'react-file-picker-ui'
import {FaFilePdf, FaFileVideo, FaFileAudio, FaFileWord} from 'react-icons/fa'

function FilePickerServer() {

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
        <h2>You selected path : {selectedPath}</h2>
        <button onClick = {() => setFpOpen(!fpOpen)}>Show File Picker</button>
        <FilePicker show={fpOpen} setShow={setFpOpen} scanDir={scanDirFromServer} setSelectedPath={setSelectedPath} filters={filtersArray} iconsObj={iconsObj}/>
        </React.Fragment>
    )

}

async function scanDirFromServer(path) {
    let result = []
    try {
      const response = await fetch(`http://localhost/scanDir?path=${encodeURI(path)}`,{
        method: "POST",
        body : JSON.stringify({path : path}),
        headers : {"Content-type": "application/json; charset=UTF-8"}
      })
      //console.log(response)
      const jsonBody = await response.json()
      result = jsonBody
    } catch(err) {
      console.warn(err)
    }
    return result
  }
  

export default FilePickerServer