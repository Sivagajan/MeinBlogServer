
import { readFromFile, writeInToFile } from '../util/fileStorage.js'

export const getAllArticles = (_, res) =>{

    readFromFile('articles.json')
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch(err => {
        console.log('error readfile', err)
        res.status(500).end()
    })    
}

export const addArticle = (req, res) => {

    const article = {
        id: req.body.id,
        title: req.body.title,
        articletext : req.body.articletext,
        picture : req.file.path
    }

    readFromFile('articles.json')
    .then(data => JSON.parse(data))
    .then(obj => {
        obj.push(article)
        writeInToFile('articles.json', JSON.stringify(obj))
    })
    .then(() => res.status(200).end())
    .catch(err => {
        console.log('error Writefile', err)
        res.status(500).end()
    })
}