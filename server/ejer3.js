
app.delete('/users', (res, req) => {
    const userId = req.params.id;
    const sql = `DELETE FROM users WHERE id=${userID}`;//tengo duda de si aqui quiza quitaria algo, me huele a nafta wachin
    db.query(sql, (error, result) => {
        if(error) throw error;{
        res.status(200).send(`User ${userId} deleted from the db.`);
         } else {
            res.sendStatus(400);
        }
    })
})