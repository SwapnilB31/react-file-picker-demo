const fte = require("node-file-tree-explorer").explorer()
const app = require('express')()
const serverRoot = "F:"
const cors = require('cors')
const formidable = require('express-formidable')

app.use(cors())
app.use(formidable())

app.listen(80,"0.0.0.0",() => {
    console.log("Server running on Port 80")
})

app.post("/scanDir", async (req,res,next) => {
    const path = req.fields.path

    let tree

    if(path === "/") {
        try {
            tree = await fte.scanDir(`${serverRoot}/`,serverRoot)
        } catch(err) {
            tree = []
            console.log(err)
        }
    }
    else {
        let realPath = `${serverRoot}/${path}`
        realPath = realPath.replace('//','/')    
        console.log(realPath)
        try {
            tree = await fte.scanDir(realPath,serverRoot)
        } catch(err) {
            tree = []
            console.error(err)
        }
    }
    
    res.json(tree)
})

