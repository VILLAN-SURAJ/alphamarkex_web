import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWordPressPosts();
  }, []);

  const fetchWordPressPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/alphamarkex.wordpress.com/posts"
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Unable to load posts right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const extractImageFromContent = (content) => {
    const match = content.match(/<img.*?src="(.*?)"/);
    return match ? match[1] : "https://via.placeholder.com/400x250?text=Alphamarkex+Blog";
  };

  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
  };

  if (loading) {
    return (
      <div className="blog">
        <h1>Our Latest Posts</h1>
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog">
        <h1>Our Latest Posts</h1>
        <div className="error">
          <i className="fas fa-exclamation-triangle"></i>
          <p>{error}</p>
          <button onClick={fetchWordPressPosts} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog">
      <h1>Our Latest Posts</h1>
      
      {posts.length === 0 ? (
        <div className="no-posts">
          <i className="fas fa-newspaper"></i>
          <p>No blog posts available at the moment.</p>
          <p>Check back soon for fresh content!</p>
        </div>
      ) : (
        <div className="blog-container">
          {posts.map((post) => (
            <article key={post.id} className="card">
              <div className="card-image">
                <img
                  src={extractImageFromContent(post.content.rendered)}
                  alt={stripHtmlTags(post.title.rendered)}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x250?text=Alphamarkex+Blog";
                  }}
                />
              </div>
              <div className="card-content">
                <h3>{stripHtmlTags(post.title.rendered)}</h3>
                <div className="post-meta">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <p>
                  {truncateText(
                    stripHtmlTags(post.excerpt.rendered) || 
                    stripHtmlTags(post.content.rendered)
                  )}
                </p>
                <a 
                  href={post.link} 
                  className="read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {posts.length > 0 && (
        <div className="blog-footer">
          <p>Want to see more insights and tips?</p>
          <a 
            href="https://alphamarkex.wordpress.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Our Blog
          </a>
        </div>
      )}
    </div>
  );
};

export default Blog;
