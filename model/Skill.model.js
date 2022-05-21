const db = require("../config")

exports.getSkill = (response)=>{
    const sql = "select * from skill;select *from hero"
    db.query(sql,(error,result)=>{
        if(error) return console.log('error:')
        //response data
        const skill = {
            title: "MOBILE-LEGEND-SKILL-LIST",
            data: JSON.parse(JSON.stringify(result[0])),
            data2:JSON.parse(JSON.stringify(result[1]))

        }
        console.log(skill)
        response.render('skill', { skill })
        response.end()
    })
}
exports.getSkillById = (id, response) => {
    const sql = `SELECT * From skill WHERE id = '${id}'  ;select * from hero`
    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        const skill = {
            title: "DATA SKILL BY ID",
            data: JSON.parse(JSON.stringify(result[0])),
            data2: JSON.parse(JSON.stringify(result[1]))
        }
        console.log(skill)
        response.render('skillDetail', { skill })
    })
}

exports.updateSkillById = (data, response) => {
    const id = data.id
    const nama_hero = data.nama_hero
    const nama_skill = data.nama_skill
    const damage =data.damage
    const sql = `UPDATE skill SET nama_hero = '${nama_hero}', nama_skill = '${nama_skill}' ,damage=${damage} WHERE id = ${id}`
    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/skill')
        response.end()
    })

}

exports.addSkill = (data, response) => {
    const nama_hero = data.nama_hero
    const nama_skill = data.nama_skill
    const damage =data.damage
    const sql = `INSERT INTO skill (nama_hero, nama_skill,damage) VALUES ('${nama_hero}', '${nama_skill}','${damage}')`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/skill')
        response.end()
    })
}

exports.removeSkill = (id, response) => {
    const sql = `DELETE FROM skill WHERE id='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/skill')
        response.end()
    })

}