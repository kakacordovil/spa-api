import { getData } from '../services/api.js';
import helloView from '../views/hello.js';

export default function () {
    getData().then(helloView);
    //console.log('hello ' + helloView);

    
}
