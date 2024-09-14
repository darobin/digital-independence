
import express from 'express';

const app = express();
app.use((req, res) => {
  return res.redirect(`https://digitalindependenceeu.wordpress.com${req.originalUrl}`);
});
app.listen(3085, () => console.log(`Listening on port 3085.`));
