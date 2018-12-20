import Vue from 'vue'
import Router from 'vue-router'

import A from '../components/a'
import B from '../components/b'


Vue.use(Router)


export default new Router({
    routes:[
        {
            path:'/a',
            component:A,
            children:[
                {
                    path:'/a/b',
                    component:B
                }
            ]
        }
    ]
})