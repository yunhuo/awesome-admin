'use strict'
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')

module.exports = function(app) {
	app.route('/api/login').post((req, res) => {
		let body = req.body
		if (body.userName === 'admin' && body.password === '6512bd43d9caa6e02c990b0a82652dca') {
			res.send({
				code: 0,
				msg: '',
				data: {
					token: '6512bd43d9caa6e02c990b0a82652dca',
					name: 'fikman'
				}
			})
		} else {
			res.send({
				code: 1,
				msg: '账号或密码错误',
				data: {}
			})
		}
	})
	app.route('/api/getUserInfo').post((req, res) => {
		res.send({
			code:0,
			msg: '',
			data: {
				profilePicture: '/img/profile.png?' + new Date().getTime(),
			}
		})
	})
	app.route('/api/uploadProfile').post((req, res) => {
		let form = new formidable.IncomingForm()
		form.on('file', (name, file) => {
			let read = fs.createReadStream(file.path)
			let write = fs.createWriteStream(path.join(__dirname, '../../public/img/profile.png'))
			read.pipe(write)
			res.send({
				code: 0,
				msg: ''
			})
		})
		form.parse(req)
	})
}
