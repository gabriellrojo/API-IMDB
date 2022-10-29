import { body } from 'express-validator'
import express, { Request } from 'express'

const movieUpload = () => {
    return [
        body("title")
            .isString()
            .withMessage("O título deve ser preenchido com seu respectivo nome"),
        body("rating")
            .isNumeric()
            .withMessage("O preenchimento da nota é obrigatório e deve ser um número")
            .custom((value: number, { req: Request }) => {
                if(value < 0 || value > 10){
                    throw new Error ("A nota varia entre 0 e 10")
                }
                    return true    
            }), 
        body("description")
            .isString()
            .withMessage("O preenchimento da descrição é obrigatório")
            .isLength({ min: 10})
            .withMessage("A sua descrição é muito curta"),
        body("director")
            .isString()
            .withMessage("O preenchimento do campo diretor é obirgatório"),
        body("poster")
            .isURL()
            .withMessage("A imagem precisa ser uma URL")
    ]
}

export default movieUpload