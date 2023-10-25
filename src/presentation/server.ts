import express  from 'express';
import path from 'path';

interface Options {
  port: number;
  public_dir?: string;
}


export class Server {



  private app= express();
  private port: number;
  private public_dir: string;

  constructor(
   options: Options) {
    const { port, public_dir= 'public' } = options;
    this.port = port;
    this.public_dir = public_dir ;
   }

  async start(){

    //middleware

    this.app.use(express.json());

    //public

    this.app.use(express.static(this.public_dir));

    //routes

    this.app.get('*', (req, res) => {
        const index = path.join(__dirname + `../../../${this.public_dir}/index.html`);
        res.sendFile(index);
  

        
        } );




    this.app.listen(this.port, () => {
      console.log(`Server listening  port : ${this.port}`);
    });
  }
}