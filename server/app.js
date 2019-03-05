const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const app = express();
var socket = require('socket.io');
const users = require('./routes/authentication'); 
const admin = require('./routes/admin'); 
const developer = require('./routes/developer'); 
var cors = require('cors')


mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);


app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api/users', users);
app.use('/admin', admin);
app.use('/',developer)


const PORT = process.env.PORT || 5000;

const server=app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_TITLE', function(data){
        io.emit('RECEIVE_TITLE', data);
        console.log('data',data)
    })
});


