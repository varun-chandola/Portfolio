import React from 'react'

const Blog = () => {
  return (
<>
    <div className='head flex justify-center text-4xl m-10'><h1>My Blogs</h1></div>
    <div id="blog" className='info flex justify-center'>
      <div className="hovering my-10 rounded-3xl overflow-hidden">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTneDwJj90ylfhiBDWRFVSNaGVdxZNkFC3w&s" />
      </div>
    </div>
</>
  )
}

export default Blog