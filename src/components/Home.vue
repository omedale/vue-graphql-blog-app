<template>
    <section class="section">
        <div class="columns">
            <div class="column centered-title">
                <h1 class="title">Latest Posts</h1>

                <h3
                    v-for="post in allPosts"
                    :key="post.id"
                    class="title is-5">
                        <router-link :to="post.slug">
                            {{ post.title }}
                        </router-link>
                </h3>
            </div>
        </div>
        <router-link v-if="$store.state.isUserLoggedIn" class="button fab-btn" :to="{name: 'AddPost'}"><i class="fa fa-plus"></i></router-link>
    </section>
</template>

<script>
import { ALL_POSTS_QUERY } from '@/graphql'

export default {
    name: 'Home',
    data () {
        return {
            allPosts: []
        }
    },
    apollo: {
        // fetch all posts
        allPosts: {
            query: ALL_POSTS_QUERY
        }
    }
}
</script>

<style>
.fab-btn {
    position: absolute;
    right: 80px;
    bottom: 10px;
    border-radius: 50%;
    background: #3373dc;
    color: white;
}
.centered-title {
  text-align: center;
}
</style>
