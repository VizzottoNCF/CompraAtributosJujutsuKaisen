 'express';

const app = express();
app.use(static('public'));
app.listen(3000, () => { console.log("App listening on port 3000"); });
