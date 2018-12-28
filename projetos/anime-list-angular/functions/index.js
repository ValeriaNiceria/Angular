const functions = require('firebase-functions')
const gcs = require('@google-cloud/storage')
const os = require('os')
const path = require('path')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileSend = functions.storage.object().onFinalize(event => {
	const object = event.data
	const bucket = object.bucket
	const contentType = object.contentType
	const filePath = object.name
	console.log('File send detected, function execution started')


	if (object.resourceState === 'not_exists') {
		console.log('We deleted a file, exit...')
		return 
	}

	if (path.basename(filePath).startsWith('resized-')) {
		console.log('We already renamed that file!')
		return
	}

	const destBucket = gcs.bucket(bucket)
	const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath))
	const metadata = { contentType: contentType }
	return destBucket.file(filePath).download({
		destination: tmpFilePath
	}).then(() =>{
		return destBucket.upload(tmpFilePath, {
			destination: 'rename-' + path.basename(filePath),
			metadata: metadata
		})
	}).catch((error) => {
		console.error('DEU RUIM: ', error)
	})
})


exports.onFileDelete = functions.storage.object().onDelete(event => {
	const object = event.data
	const bucket = object.bucket
	const contentType = object.contentType
	const filePath = object.name
	console.log('File delete detected, function execution started')
	return
})

//npm install --save-dev @google-cloud/storage - dentro da pasta functions