import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'
import { addArticle, getAllArticles } from './controller/articleController.js'

const PORT = 9090
const app = express()

const upload = multer({dest: './public'})

app.use(morgan('dev'))
app.use('/public', express.static('public'))
app.use(cors())

app.get('/api/blog', getAllArticles)

app.post('/api/blog', upload.single('picture'), addArticle)

app.listen(PORT, () => console.log('Server runs on PORT: ',PORT))