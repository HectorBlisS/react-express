import express from 'express';
import path from 'path';
import cors from 'cors'

const PORT = process.env.PORT || 9000;
const app = express();

//cors
app.use(cors());

app.get("/api", (req, res)=>{
   res.json({perro:"mijo"})
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get("/*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, ()=>{
    console.log(`Backend listening on port ${PORT}`);
});

