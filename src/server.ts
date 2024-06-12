import cors from 'cors';
import restaurants from './restaurant';
import server from 'json-server';
import * as dotenv as dotenv;


dotenv.config();
const app = server.create();
const port = process.env.PORT || 3000;
const router = server.router(restaurants);

app.use(cors({
	origin: process.env.NODE_FRONTEND_URL,
	credentials: true
}));
app.use(router);

app.listen(port, () => {
	console.log('Server running on port ' + port);
});
