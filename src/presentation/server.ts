import express  from 'express';
import path from 'path';


export class Server {

  private app= express();

  async start(){

    //middleware

    this.app.use(express.json());

    //public

    this.app.use(express.static('public'));

    //routes

    this.app.get('*', (req, res) => {
        //const index = path.join(__dirname + '../../../public/index.html');
       // res.sendFile(index);
       res.sendFile('index.html', { root: 'public' });
        
        } );




    this.app.listen(3000, () => {
      console.log(`Server listening on port : ${3000}`);
    });
  }
}