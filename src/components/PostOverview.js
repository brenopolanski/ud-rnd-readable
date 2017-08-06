import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import { pinkA200, transparent } from 'material-ui/styles/colors';

import {formatTimestamp} from '../utils/';


/**
 * Render post overview
 */
const PostOverview = (props) => {
  const { post, votePost } = props;

  const postedAt = formatTimestamp(post);

  return (
    <Card
      zDepth={1}
    >
      <CardHeader
        title={ post.title }
        subtitle={ `By ${post.author} at ` + postedAt + ` | Score: ${post.voteScore}` }
      />

      <CardText expandable={false}>
        { post.body }
      </CardText>

      <CardText expandable={false}>
        <Chip>
          <Avatar
            size={32}
            color={pinkA200}
            backgroundColor={transparent}
          >
            { post.category[0].toUpperCase() }
          </Avatar>
          { post.category }
        </Chip>
      </CardText>

      <CardActions>
        <Link to={`/posts/${post.id}`}>
          <RaisedButton
            label="Go to Post"
          />
        </Link>

        <RaisedButton
          label="Up Vote"
          primary={true}
          onTouchTap={() => votePost(post.id, 'upVote')}
        />
        <RaisedButton
          label="Down Vote"
          secondary={true}
          onTouchTap={() => votePost(post.id, 'downVote')}
        />
      </CardActions>
    </Card>
  )
}

export default PostOverview;