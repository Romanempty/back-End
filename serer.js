
const http = require('http')
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        })
    }, ms)
}
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) reject(err)
            else resolve(data)
        
        })     
    })
}

const server = http.createServer(async (request, response) => {
 switch(request.url) {
    case '/home' : {
        const data = await readFile('pages/ABOUT.html')
    fs.readFile('pages/ABOUT.html', (err, data) => {
        if(err) response.write(err)
        else response.write(data)
        response.end()
    }) 
    break;
    }
    case '/ABOUT' : {
        await delay(3000)
        response.write('ABOUT COURSE')
        response.end()   
    break;
    }
    default : {
    response.write('404 not found')
    response.end()
    }
 }
} ) 

server.listen(3003)