const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://admin:admin@cluster0.ggzuodr.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true});

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.log(err);
    }
});

module.exports = client;