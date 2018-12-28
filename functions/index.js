const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileSend = functions.storage.object().onFinalize(event => {
	const object = event.data
	const bucket = object.bucket
	const contentType = object.contentType
	const filePath = object.name
	console.log('File send detected, function execution started')
	return
})


exports.onFileDelete = functions.storage.object().onDelete(event => {
	const object = event.data
	const bucket = object.bucket
	const contentType = object.contentType
	const filePath = object.name
	console.log('File delete detected, function execution started')
	return
})