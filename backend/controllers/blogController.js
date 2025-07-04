import Blog from '../models/Blog.js'

// ✅ Create Blog
export const createBlog = async (req, res) => {
  const { title, content } = req.body

  if (!title || !content) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const blog = await Blog.create({
    title,
    content,
    user: req.user._id
  })

  res.status(201).json(blog)
}

// Delete Blog
export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) return res.status(404).json({ message: 'Blog not found' })

  if (blog.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  await blog.remove()
  res.status(200).json({ message: 'Blog deleted' })
}

// // Get All Blogs
// export const getBlogs = async (req, res) => {
//   const blogs = await Blog.find({}).populate('user', 'name email')
//   res.json(blogs)
// }       