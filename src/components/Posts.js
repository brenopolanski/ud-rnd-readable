import React from 'react';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import PostOverview from './PostOverview';
import {formatText} from '../utils';


/**
 * Render a list of posts
 */
const Posts = (props) => {
  const {
    posts,
    title,
    sort,
    votePost
 } = props;

  const formattedTitle = title
    ? title.toUpperCase()
    : '';

  const postNum = posts
    ? posts.length
    : 0;

  const mappedPost =  posts && posts.length
      ? posts
        .filter(post => !post.deleted) // don't show deleted post
        .sort((a, b) => a[posts.sort] < b[posts.sort]) // sort by
        .map((post, i) =>
          <PostOverview
            post={post}
            key={i}
            votePost={votePost}
          />)
      : 'No posts';

  const sortOptionEls = ['voteScore', 'timestamp'].map((option, i) => (
    <MenuItem
      value={option}
      key={i}
      primaryText={formatText(option)}
    />
  ));

  return (
    <article>
      {
        mappedPost && mappedPost.length
          ? (
              <div>
                <Subheader>{formattedTitle}</Subheader>

                <p>Showing {postNum} posts</p>

                <SelectField
                  floatingLabelText="Sort By"
                  value={sort}
                  onChange={this.changeSortOption}
                  autoWidth={true}
                >
                  {sortOptionEls}
                </SelectField>

                <br />

                {mappedPost}
              </div>
            )
          : 'No Categories'
      }
    </article>
  )
}

export default Posts