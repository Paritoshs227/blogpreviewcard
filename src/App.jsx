
function App() {
  return (
    <>
      <section className="maincontainer rounded-4 px-4 py-4">
        <img src={`illustration-article.svg`} alt="" className="mb-3 w-100 rounded-3" />
        <button className="btn figtree-800 yellow-btn mb-3">Learning</button>
        <p className="mb-3">Published 21 Dec 2023</p>
        <h4 className="figtree-800 mb-3">HTML & CSS foundations</h4>
        <p className="mb-3">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="userDetails figtree-800 d-flex align-items-center ">
          <img src={`image-avatar.webp`} alt="" className="me-3  avatar" />  Greg Hooper
        </div>
      </section>
    </>
  )
}

export default App
