import { getUser } from '../services/api.js';
import helloView from '../views/hello.js';

export default function () {
    getUser().then(helloView);
    console.log('hello ' + helloView);

    
}
