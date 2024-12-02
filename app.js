const express=require('express')
const app = express();
// connect to DATABASE

// middleware
// CRUD FOR EMAILS (storing, deleting,)
app.post('/emails', async(req,res)=>{
    try
    {
        let {client_id, content, email_id,prioroty} = req.body
        let count = await excecute_db_query( `select count(*) as count from emails where scheduled = true and client_id = ${client_id}`)
        let status = "pending"
        if(count>=300)
            scheduled = false
        else 
        {
            status = "sent"
            scheduled = true
            // call blackbox api
        }
        await excecute_db_query(`insert into emails (client_id ,email_id ,content, status, created_at, scheduled, priority) VALUES (${client_id}, ${email_id},${content}, ${status}, ${newDate().format("YYYY:MM:DD HH:MM:SS")},${scheduled}, ${prioroty} )`)

        res.status(201).json("email stored and scheduled successfully")
    }
    catch(err)
    {
        res.status(400).json({
            message:"something went wrong"
        })
    }
})