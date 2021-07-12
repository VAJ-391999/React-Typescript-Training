const Student = require("../models/StudentsModel");
//const express = require("express");
var fn = require('../middleware/authMiddleware');
const srouter = require("express").Router();

srouter.get("/student", async (req: any, res: any) => {
    try {
        const studentData = await Student.find({})
        res.json(studentData)
    } catch (err) {
        res.json(err)
    }
})

srouter.get("/student/:id", async (req: any, res: any) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findById(_id)

        if (!studentData) {
            res.status(404).send();
        } else {
            res.json(studentData)
        }
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

srouter.delete("/student/:id", fn.requireAuth, async (req: any, res: any) => {
    try {
        const id = req.params.id
        const studentData = await Student.findByIdAndDelete(id)

        if (!studentData) {
            res.status(400).send();
        }
        else {
            res.json(studentData)
        }
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

srouter.patch("/student/:id", fn.requireAuth,async (req: any, res: any) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findByIdAndUpdate(_id, req.body, {new : true})
        res.send(studentData)

        if (!studentData) {
            res.status(404).send(studentData);
        }
        else {
            res.send(studentData)
        }
    }
    catch (err) {
    res.status(400).json({ err })
}
})

srouter.post("/student", fn.requireAuth,async (req: any, res: any) => {

    try {
        const student = new Student(req.body)
        const createStudent = await student.save();
        res.status(201).json({ msg: "Post request is success", createStudent })

    } catch (err) {
        res.status(400).json({ err })
    }

    /* const student = new Student(req.body)
    student.save()
    .then(() => {
        res.status(201).json({ msg : "Post request is success", student})
    })
    .catch((err) => {
        res.status(400).json({err})
    });*/
})



module.exports = srouter;