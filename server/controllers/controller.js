module.exports = {
    
    //--------------GET------------------//
    get_timecard: (req, res, next) => {    
        const db = req.app.get("db")
        db.get_timecard()
            .then(response => {
                console.log(response);
                res.status(200).send(response)})
    },


    get_requests: (req, res, next) => {    
        const db = req.app.get("db")
        db.get_requests()
            .then(response => {
                console.log(response);
                res.status(200).send(response)})
    },

    // get_notification: (req, res, next) => {    
    //     const db = req.app.get("db")
    //     db.get_notification()
    //         .then(response => {
    //             console.log(response);
    //             res.status(200).send(response)})
    // },

    //-------------POST------------------//
    
    submit_timecard: (req, res, next) => {        
        const { user_id, clock_in, clock_out, total_hours } = req.body
        const db = req.app.get("db")
        db.submit_timecard([ user_id, clock_in, clock_out, total_hours ])
        .then(response => res.status(200).send(response))
        },

    submit_requests: (req, res, next) => {        
        const { user_id, start_date, end_date, approval} = req.body
        const db = req.app.get("db")
        db.submit_requests([ user_id, start_date, end_date, approval])
        .then(response => res.status(200).send(response))
        }
        
}