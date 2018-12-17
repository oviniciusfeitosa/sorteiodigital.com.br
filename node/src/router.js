import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import NaoEncontrado from './components/NaoEncontrado.vue';
import SorteadorDeNumeros from './components/SorteadorDeNumeros.vue';
import SorteadorDeNomes from './components/SorteadorDeNomes.vue';
import SorteadorDeAmigoSecreto from './components/SorteadorDeAmigoSecreto.vue';

Vue.use(Router);

const routesObject = [
    {
        path: '/',
        component: Home,
        name: 'home',
        children: [
            {
                path: '/sortear-numeros',
                component: SorteadorDeNumeros,
                name: 'SorteadorDeNumeros',
                meta: {
                    title: 'Sortear Números',
                },
            },
            {
                path: '/sortear-nomes',
                component: SorteadorDeNomes,
                name: 'SorteadorDeNomes',
                meta: {
                    title: 'Sortear Nomes',
                },
            },
            {
                path: '/sortear-nomes',
                component: SorteadorDeAmigoSecreto,
                name: 'SorteadorDeAmigoSecreto',
                meta: {
                    title: 'Sortear Amigos Secretos',
                },
            },
        ]
    },
    {
        path: '*',
        component: NaoEncontrado,
        // redirect: '/'
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routesObject,
});

// router.beforeEach((to, from, next) => {
//
//     const publicPages = [
//         '/login',
//         '/cadastrar'
//     ];
//
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//
//     if (authRequired && !loggedIn) {
//         return next('/login');
//     }
//
//     next();
// })

export default router;
