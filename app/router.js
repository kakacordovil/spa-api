import routes from "./routes.js";

function route() {
    const { hello: defaultRoute } = routes;

    const { init } =
        Object.values(routes).find(({ hash }) =>
            window.location.hash.startsWith(hash)
        ) || defaultRoute;

    init();
}

window.onhashchange = route;

route();
