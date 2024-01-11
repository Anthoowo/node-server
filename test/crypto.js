// // const crypto = require("crypto");
// const https = require('https');
// // process.env.UV_THREADPOOL_SIZE=3;


// const MAX_CALLS = 1;

// const start = Date.now();

// for(let i =0;i< MAX_CALLS;i++){

//     https.request('https://github.com/', (res)=>{
//         res.on('data', ()=>{})
//         res.on('end', ()=>{
//             console.log(`Hash: ${i + 1 }`, Date.now()-start);
//         })
//     }).on('error', (error) => {
//         console.error('Request error:', error);
//     });
   

    
//     // crypto.pbkdf2("password", "salt", 100000,512,"sha512",()=>{
//     //     
//     // });
// }
// // crypto.pbkdf2Sync("password", "salt", 100000,512,"sha512");
// // console.log('hash:', Date.now()-start)
// // 
// // console.log(typeof(Date.now))
// console.log('console.log 1')

Promise.resolve().then(()=>{
    console.log('this is promise.resolve 1124')
})
 process.nextTick(()=>{
    console.log('this is next tick process 1')
})
 process.nextTick(()=>{
    console.log('this is next tick process 2')
    Promise.resolve().then(()=>{
        console.log('this is promise.resolve nested')
    })
    process.nextTick(()=>{
        console.log('this is next tick process nested')
    })
})
 process.nextTick(()=>{
    console.log('this is next tick process 3')
})
// console.log('console.log 2')

