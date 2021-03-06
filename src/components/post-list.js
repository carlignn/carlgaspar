import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Tags from './tags';

const PostList = ({ posts }) => {
  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead, index }) => {
    const { title, tags, date, description } = frontmatter;
    const { slug } = fields;
    
    return (
      <PostListItem
        key={slug}
        tags={tags}
        title={title}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <StyledPostList>{PostList}</StyledPostList>;
};

export default PostList;

const PostListItem = ({
  title,
  date,
  timeToRead,
  tags,
  excerpt,
  description,
  slug,
}) => {
  return (
    <StyledPostListItem>
      <Tags tags={tags} />

      <PostListTitle>
        {title === "Follow Me On Twitch" ? title : <Link to={slug}>{title}</Link>}
        
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />

      { // if Twitch details should be displayed as a blog
        title === "Follow Me On Twitch" ?
          <div className="twitch">
            <div className="twitch-video" align="center">
              <iframe
                src="https://player.twitch.tv/?autoplay=false&channel=carlignn&parent=www.carlgaspar.com&parent=carlgaspar.com&parent=carlgaspar.netlify.app&parent=www.carlgaspar.netlify.app"
                title="Twitch"
                frameborder="0"
                scrolling="no"
                autoplay="true"
                height="100%"
                width="100%"
                allowfullscreen="true">
              </iframe>
            </div>
          </div>
          :
          ""
      }
      
      <PostListMeta>
        <span>{title === "Follow Me On Twitch" ? "Just now" : date}</span>

        <span>{title === "Follow Me On Twitch" ? "Until further notice" : timeToRead + " mins"}</span>
      </PostListMeta>
    </StyledPostListItem>
  );
};

const StyledPostList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));

  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const StyledPostListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);
`;

const PostListMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;
