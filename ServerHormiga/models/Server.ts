import express, {Application} from 'express';
import cors from "cors";

// Routes
import categoryRoutes from "../routes/category";
import seedRoutes from "../routes/seed";
import userRoute from "../routes/users";
import authRoute from "../routes/auth";


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        seed: "/api/seed-data",
        users: "/api/users",
        auth: "/api/auth",
        categories: "/api/categories",
    }
   

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || "3000";
       
       
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.apiPaths.seed, seedRoutes);
        this.app.use( this.apiPaths.auth, authRoute );
        this.app.use( this.apiPaths.users, userRoute);
        this.app.use( this.apiPaths.categories, categoryRoutes);
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}





export default Server;