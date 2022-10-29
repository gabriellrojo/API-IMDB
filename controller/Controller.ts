import express, { Request, Response } from "express"
import Movie from "../model/Movie"

export default class Controller {
    static teste = (req: Request, res: Response<string>) => {
        res.send("teste")
    }

    static postFilm = async (req: Request, res: Response<Object>) => {
        const movieInsert = {
            title: req.body.title,
            rating: req.body.rating,
            description: req.body.description,
            director: req.body.director,
            stars: req.body.stars,
            poster: req.body.poster
        }

        try{
            const createMovie = new Movie(movieInsert)
            await createMovie.save()
            res.status(201).json(createMovie)
        }
        catch(err){
            res.status(500).json({err})
        }
    }

    static getFilmById = async (req: Request, res: Response) => {
        const id = req.params.id
        try {
            const movie = await Movie.findById({_id: id})
            if(!movie){
                res.status(404).json({erros: ["Não foi encontrado nenhum filme"]})
                return
            }
            res.status(200).json(movie)
        }
        catch(err){
            res.status(500).json({err})
        }
    }

    static getFilms = async (req: Request, res: Response) => {
        try {
            const movies = await Movie.find()
            if(!movies){
                res.status(404).json({erros: ["Não foi encontrado nenhum filme"]})
                return
            }
            res.status(200).json(movies)
        } 
        catch(err){
            res.status(500).json({err})
        }
    }

    static deleteFilm = async (req: Request, res: Response) => {
        const id = req.params.id
        
        try{
            const movie = await Movie.findById({_id: id})
            if(!movie){
                res.status(404).json({erros: ["Não foi encontrado nenhum filme"]})
                return
            }
            await Movie.remove(movie)
            res.status(200).json(`Filme ${movie.title} excluído com sucesso`)
        } catch(err){
            res.status(500).json(err)
        }
    }

    static update = async (req: Request, res: Response) => {
        const id = req.params.id
        const title = req.body.title
        const rating = req.body.rating
        const description = req.body.description
        const director = req.body.director
        const stars = req.body.stars
        const poster = req.body.poster

        try{
            const movie = await Movie.findById({_id: id})
            console.log(movie)
            if(!movie){
                res.status(404).json({erros: ["Não foi encontrado nenhum filme"]})
                return
            }
            if(title){
                movie.title = title
            }
            if(rating){
                movie.rating = rating
            }
            if(description){
                movie.description = description
            }
            if(director){
                movie.director = director
            }
            if(stars){
                movie.stars = stars
            }
            if(poster){
                movie.poster = poster
            }

            const movieUpdate = await Movie.findByIdAndUpdate({_id: id}, {$set: movie}, {$new: true})
            res.status(201).json(movieUpdate)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}