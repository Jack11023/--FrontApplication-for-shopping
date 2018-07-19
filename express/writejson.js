var fs=require('fs')

fs.writeFile('lunbo.json','111','utf8',function(err,res) {
    console.log(JSON.stringify([{"img":"localhost:9090/images/bj01.jpg"},{"img":"localhost:9090/images/bj02.jpg"}
    ,{"img":"localhost:9090/images/bj03.jpg"},{"img":"localhost:9090/images/bj04.jpg"}]))
})