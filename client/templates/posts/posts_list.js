/**
 * Created by thangdx on 28/12/2014.
 */

Template.postsList.helpers({
    postsWithRank: function() {
        return this.posts.map(function(post, index, cursor)
        {
            post._rank = index;
            return post;
        });
    }
});