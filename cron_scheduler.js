// emails
// Client_id email_id , content, status, created_at scheduled priority


// cron daily at 12am

const cron = require('node-cron')

cron.schedule('0 0 * * *', async()=>{
    console.log("cron daily at 12 am")
    await schedule()
})


async function schedule() {
    return new Promise(async(req,res)=>{
        await excecute_db_query('delete from emails where scheduled=true')
        let res = await excecute_db_query('Update emails set scheduled = true where email_id in (Select email_id from emails where cliend_id = abc order by priority desc created_at desc limit 300)')
        for (content in res){
            // call blackbox email send api
        }

    })   
}

