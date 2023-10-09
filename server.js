const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const multer = require('multer');
const path = require('path');

const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage });

server.use(middlewares);
server.use(express.static('uploads'));
server.use('/uploads', express.static('uploads'));
server.use('/api', router);

server.post('/api/upload', upload.single('imagem'), (req, res) => {
  res.json({ message: 'Upload bem-sucedido' });
});

server.listen(port, () => {
  console.log(`Servidor JSON está rodando em http://localhost:${port}`);
});
