import express, {Request, Response, NextFunction} from "express"
import { validationResult } from "express-validator"

const validation = (req: Request, res: Response, next: NextFunction) => {
    const erros = validationResult(req)

    if(erros.isEmpty()){
        next()
    }
    else{
        const errosObtidos: Array<Object> = []
        erros.array().map((err) => errosObtidos.push(err.msg))
        return res.status(422).json({
            erro: errosObtidos
        })
    }
}

export default validation