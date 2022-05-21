const express = require("express")
const router = express.Router()
const Skill = require("../model/Skill.model")

//get all hero list
router.get('/', (request, response) => {
    Skill.getSkill(response);
})

//get hero by id
router.get('/:id', (request, response) => {
    const id = request.params.id
    Skill.getSkillById(id, response)
    console.log(id)
})

router.post('/add', (request, response) => {
    console.log(request.body)
    const data = {
        "nama_hero": request.body.nama_hero,
        "nama_skill": request.body.nama_skill,
        "damage":request.body.damage
    }
    Skill.addSkill(data, response)
})

//update skill
router.post('/update', (request, response) => {
    const data = {
        "id": request.body.id,
        "nama_hero": request.body.nama_hero,
        "nama_skill": request.body.nama_skill,
        "damage":request.body.damage
    }
    Skill.updateSkillById(data, response)
})
//remove Skill
router.post('/remove', (request, response) => {
    const id = request.body.id
    Skill.removeSkill(id, response)
})
module.exports = router