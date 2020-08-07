const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

const subjects= [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays= [
     "Domingo",
     "Segunda-feira",
     "Terça-feira",
     "Quarta-feira",
     "Quinta-feira",
     "Sexta-feira",
     "Sábado",
]


const proffys = [
    {
     name: "Erick D Oliveira",
     avatar: "https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/52047704_2750691851622543_6902926821734481920_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeHHPhPxhVgsChs0kXhi9JzgrYi8S0wD0GKtiLxLTAPQYnqax5HbgHvPQrM_biX_tvTizdQ6WM7N-d8bYpuS0vNH&_nc_ohc=wxXvW1mqKX4AX8bYcm0&_nc_ht=scontent.fcgh5-1.fna&oh=1bf29bee2fa46238bf36fc6ed69595ce&oe=5F50D901",
     whatsapp:"11 95969-5041",
     bio: "O mais Brabo",
     subject:"quimica",
     cost:"999",
     weekday:[ 0 ],
     timefrom:[ 720 ],
     timeto: [ 1220 ]
    },
    
    {
        name: "Vinicius Souza",
        avatar: "https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/78846146_1007792386222319_4923082915597778944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeF98SOlwhxbT-tCT7lwFGL-duZfhqUrXVB25l-GpStdULp7Ct5YaeyDc2_7KGlHw3g_UoAbOiatjoNdDKswPUnq&_nc_ohc=u5WMUwRDO34AX-r6Lgg&_nc_ht=scontent.fcgh5-1.fna&oh=978fe2f4a8bba94742dc145cae0a9234&oe=5F53A657",
        whatsapp:"11 961256379",
        bio: "O mais Brabo",
        subject:"ed Fisica",
        cost:"25",
        weekday:[ 0 ],
        timefrom:[ 720 ],
        timeto: [ 1220 ]
       },

 
]

function getSubject(subjectNumber){
    const position =+ subjectNumber - 1
    return subjects[position]
}


function pageLanding(require, response){
    
    return response.render("index.html")
}

function pageStudy(require, response){
    const filters = require.query
    console.log(filters)
    return response.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays
    })
}

function pageGiveClasses(require, response){
    const data = require.query

    const isNoEmpty = Object.keys(data).length > 0

    if (isNoEmpty) {

       data.subject = getSubject(data.subject)


       proffys.push(data)
        return response.redirect("/study")
        
    }
    
    return response.render("give-classes.html", {
        weekdays,
        subjects
        })
}

server
//configurar arquivos estaticos (css, script, imagends)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(3000)