import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { pinkA200, transparent } from 'material-ui/styles/colors';

import {formatTimestamp} from '../utils/';


/**
 * Render post overview
 */
const PostOverview = (props) => {
  const { post } = props;

  const postedAt = formatTimestamp(post);

  return (
    <Card
      zDepth={1}
    >
      <CardHeader
        title={ post.title }
        subtitle={ `By ${post.author} at ` + postedAt + ` | Score: ${post.voteScore}` }
        actAsExpander={true}
        showExpandableButton={true}
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
    </Card>
  )
}

export default PostOverview;