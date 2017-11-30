module.exports = {
    
    //--------------GET------------------//
    get_timecard: (req, res, next) => {    
        const db = req.app.get("db")
        db.get_timecard([req.params.id])
            .then(response => {
                // console.log(response);
                res.status(200).send(response)})
    },

    get_emp_timecard: (req, res, next) => {    
        console.log('hit the controller')
        const db = req.app.get("db")
        db.get_emp_timecard([req.params.username])
            .then(response => {
                console.log('response from db', response);
                res.status(200).send(response);
            })
    },

    get_requests: (req, res, next) => {    
        const db = req.app.get("db")
        db.get_requests([req.params.id])
            .then(response => {
                // console.log(response);
                res.status(200).send(response)})
    },
    
    get_admin_requests: (req, res, next) => {    
        const db = req.app.get("db")
        db.get_admin_requests()
            .then(response => {
                // console.log(response);
                res.status(200).send(response)})
    },
    
   

    //-------------POST------------------//
    
    submit_clockin: (req, res, next) => {        
        const { user_id, clock_in } = req.body
        // console.log(req.body)
        const db = req.app.get("db")
        db.submit_clockin([ user_id, clock_in ])
        .then(response => res.status(200).send(response))
        },

    submit_requests: (req, res, next) => {        
        const { user_id, start_date, end_date, reason } = req.body
        const db = req.app.get("db")
        db.submit_requests([ user_id, start_date, end_date, reason])
        .then(response => res.status(200).send(response))
        },
        
    //-----------PUT--------------------//
    add_clockout: (req, res, next) => {          
        const { clock_out, total_hours, clockoutid} = req.body
        const db = req.app.get("db")
        db.add_clockout([ clock_out, total_hours, clockoutid])
        .then(response => res.status(200).send(response))
        }, 
    update_approval:(req, res, next) => {          
        const { approval, requestid } = req.body
        const db = req.app.get("db")
        db.update_approval([ approval, requestid ])
        .then(response => res.status(200).send(response))
        }, 
}   