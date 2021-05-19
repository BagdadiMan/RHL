import React from 'react';

export Post = (props) => {
  const [user, text, likes, comments, time] = props;
  const title = user.name + " " + user.photo;
  const subTitle = getTimeDif(time);
  const getTimeDif = (time) => {
    return Date.now() - time.getDate();
  };
  const addComment
  return ( <
    div >
    <PostTitle/>
    <PostContent/>
    <
    title > title < /title> <
    h6 > subTitle < /h6>
    <p>text</p>
    <PostBottom likes comments addComment/>
     <
    /div>
  );
}
