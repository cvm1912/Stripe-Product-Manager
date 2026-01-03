import { stat } from 'fs'
import prisma from '../config/config'
import { Request, Response } from 'express'

export const createOrganizer = async (req: Request, res: Response) => {
  const { name, email } = req.body

  if(!name || !email){
    return res.json({message:"name and email are required"})
  }

  const existingOrganizer = await prisma.organizer.findUnique({where: {email}})
  if(existingOrganizer){
    return res.json({message:"Organizer already exists"})
  }



   // create a organizer 
  const organizer = await prisma.organizer.create({
    data: { 
        name, 
        email,
        kycStatus: 'PENDING' 
        }
    })

    if(!organizer){
        return res.json({message:"Organizer not created"})
    }

  res.json({
    msg:"Organizer created successfully",
    data: {
        id: organizer.id,
        name: organizer.name,
        email: organizer.email,
        kycStatus: organizer.kycStatus
    }
  })
}


export const getOrganizer = async(req: Request, res: Response) => {
    const organizers = await prisma.organizer.findMany()
    res.json({
        msg: "Organizers found successfully",
        data: organizers
    })
}


export const updateOrganizer = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, email } = req.body

        const updatedUser = await prisma.organizer.update({
            where: { id },
            data: { name, email }
        })

        res.json({
            message: "Organizer updated successfully",
            data: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                kycStatus: updatedUser.kycStatus
            }
        })
    } catch(err) {
        res.json({
            message: "Internal Server Error",
            status: 500
        })
    }
}






