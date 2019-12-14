const mkdirp = require('mkdirp')
const UPLOAD_DIR='./uploads'
const shortid = require('shortid')
const { createWriteStream, unlink } = require('fs')
const {google} = require('googleapis')
const credentials = require('./credentials.json')
const scopes = [
  'https://www.googleapis.com/auth/drive'
];
const auth = new google.auth.JWT(
  credentials.client_email,null,
  credentials.private_key,scopes
)

const drive = google.drive({
  version:'v3',
  auth
})
// Ensure upload directory exists.
mkdirp.sync(UPLOAD_DIR)

const storeUpload = async upload => {
  const { createReadStream, filename, mimetype } = await upload
    console.log(filename)
    const id = shortid.generate()
    let docId=""
    let path = `https://docs.google.com/uc?id=${docId}&amp;export=download`
  
    // Store the file in google
    try{
    const res = await drive.files.create({
      requestBody:{
        name: filename,
        mimeType: mimetype
      },
      media:{
        mimeType:mimetype,
        body: createReadStream(path)
      }
    })
    docId= res.data.id
    path = `https://docs.google.com/uc?id=${docId}&amp;export=download`
    console.log("success uploading",id)
  }
  catch(e){
    console.log("error uploading",e)
  }
  
  const file = { id, filename, mimetype, path }
    return file
  }
  module.exports={
      storeUpload
  }