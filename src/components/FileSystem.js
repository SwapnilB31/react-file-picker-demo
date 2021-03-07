import DirectoryTree from './DirectoryTree'

function FileSystem(){
    
    /**
     * 
     * @param {String} path 
     */
     const scanDir = (path) => {
        let obj = null;
        const pathParts = path.split('/').slice(1);
        console.log(pathParts)
        if(path === "/") {
          obj = DirectoryTree
        }
        else {
          obj = DirectoryTree;
          for(let part of pathParts)
            obj = obj[part]
        }
    
        if(!obj)
          return [];
    
        let direntArr = [];
        for(let item in obj) {
          if(item.toString() === "files") {
            for(let file of obj.files)
              direntArr.push({name : file.name, isDirectory : false, path : path + '/' + file.name})
          }
          else {
            direntArr.push({name : item, isDirectory : true, path : path === "/" ? path  + item : `${path}/${item}`})
          }
        }
    
        return direntArr;
      };
    
      return {
        scanDir : scanDir
      }
}

export default FileSystem