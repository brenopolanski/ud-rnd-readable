import React from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { fetchPosts, changeSortOption } from '../api/posts/actions';
import PostOverview from '../components/PostOverview';
import {formatText} from '../utils';


/**
 * All Post List on home page
 */
class AllPostList extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  changeSortOption = (e, i, value) => {
    this.props.changeSortOption(value);
  }

  render() {
    const { posts, sort } = this.props;

    const mappedCat = posts && posts.length
      ? posts
        .filter(post => !post.deleted) // don't show deleted post
        .sort((a, b) => a[posts.sort] < b[posts.sort]) // sort by
        .map((post, i) => <PostOverview post={post} key={i} />)
      : 'No posts';

    const sortOptionEls = ['voteScore', 'timestamp'].map((option, i) => (
      <MenuItem
        value={option}
        key={i}
        primaryText={formatText(option)}
      />
    ));

    return (

      <div>
        {
          mappedCat && mappedCat.length
            ? (
                <div>
                  <Subheader>ALL POSTS</Subheader>

                  <SelectField
                    floatingLabelText="Sort By"
                    value={sort}
                    onChange={this.changeSortOption}
                    autoWidth={true}
                  >
                    {sortOptionEls}
                  </SelectField>

                  {mappedCat}
                </div>
              )
            : 'No Categories'
        }
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
    sort: posts.sort,
    fetching: posts.fetching,
    fetched: posts.fetched,
    error: posts.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    changeSortOption: (option) => dispatch(changeSortOption(option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPostList);