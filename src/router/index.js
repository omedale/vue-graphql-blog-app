import Vue from "vue";
import Router from "vue-router";
import SignUp from "@/components/Admin/SignUp";
import LogIn from "@/components/Admin/LogIn";
import Users from "@/components/Admin/Users";
import UserDetails from "@/components/Admin/UserDetails";
import AddPost from "@/components/Admin/AddPost";
import Posts from "@/components/Admin/Posts";
import Home from "@/components/Home";
import SinglePost from "@/components/SinglePost";
import store from '../store/store'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/signup",
      name: "SignUp",
      meta: { adminOnly: false },
      component: SignUp
    },
    {
      path: "/login",
      name: "LogIn",
      meta: { adminOnly: false },
      component: LogIn
    },
    {
      path: "/admin/users",
      name: "Users",
      meta: { adminOnly: true },
      component: Users
    },
    {
      path: "/admin/users/:id",
      name: "UserDetails",
      meta: { adminOnly: true },
      component: UserDetails,
      props: true
    },
    {
      path: "/admin/posts/new",
      name: "AddPost",
      meta: { adminOnly: true },
      component: AddPost
    },
    {
      path: "/admin/posts",
      name: "Posts",
      meta: { adminOnly: true },
      component: Posts
    },
    {
      path: "/",
      name: "Home",
      meta: { adminOnly: false },
      component: Home
    },
    {
      path: "/:slug",
      name: "SinglePost",
      meta: { adminOnly: false },
      component: SinglePost,
      props: true
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.adminOnly)) {
    if (store.state.isUserLoggedIn){
      next();
    } else {
      next({
        path: '/login'
      })
    }
 } else {
    next();
   }
});

export default router
