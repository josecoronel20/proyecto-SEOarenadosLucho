import blogData from './blog-posts.json'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorBio: string
  date: string
  dateFormatted: string
  category: string
  tags: string[]
  readTime: string
  image: string
  imageAlt: string
  featured: boolean
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string
  }
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  slug: string
  icon: string
}

export interface BlogAuthor {
  id: string
  name: string
  bio: string
  avatar: string
}

export interface BlogData {
  posts: BlogPost[]
  categories: BlogCategory[]
  authors: BlogAuthor[]
}

const blog: BlogData = blogData

// Get all blog posts
export const getAllPosts = (): BlogPost[] => {
  return blog.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  return blog.posts.filter(post => post.featured)
}

// Get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blog.posts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}

// Get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blog.posts.find(post => post.slug === slug)
}

// Get post by ID
export const getPostById = (id: string): BlogPost | undefined => {
  return blog.posts.find(post => post.id === id)
}

// Get all categories
export const getAllCategories = (): BlogCategory[] => {
  return blog.categories
}

// Get category by slug
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blog.categories.find(category => category.slug === slug)
}

// Get all authors
export const getAllAuthors = (): BlogAuthor[] => {
  return blog.authors
}

// Get author by name
export const getAuthorByName = (name: string): BlogAuthor | undefined => {
  return blog.authors.find(author => author.name === name)
}

// Get related posts (same category, excluding current post)
export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blog.posts
    .filter(post => 
      post.id !== currentPost.id && 
      post.category === currentPost.category
    )
    .slice(0, limit)
}

// Get recent posts (excluding current post)
export const getRecentPosts = (currentPost?: BlogPost, limit: number = 5): BlogPost[] => {
  return blog.posts
    .filter(post => currentPost ? post.id !== currentPost.id : true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Search posts by title, excerpt, or content
export const searchPosts = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase()
  return blog.posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

// Get posts by tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blog.posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase()))
  )
}

// Get all unique tags
export const getAllTags = (): string[] => {
  const allTags = blog.posts.flatMap(post => post.tags)
  return [...new Set(allTags)].sort()
}

// Generate sitemap data for blog posts
export const getBlogSitemapData = () => {
  return blog.posts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.6
  }))
}

// Generate RSS feed data
export const getBlogRSSData = () => {
  return blog.posts.map(post => ({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    date: post.date,
    author: post.author,
    category: post.category
  }))
}

export default blog
