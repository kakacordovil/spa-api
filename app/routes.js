import hello from './controllers/hello.js';
import index from './controllers/index.js';

export default {
    hello: {
        hash: '#hello',
        init: hello
    },

    index: {
        hash: '#index',
        init: index
    }
};
