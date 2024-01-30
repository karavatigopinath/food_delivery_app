const Contact = ()=>{
  return(
    <div>
        <h1 className="font-bold text-lg p-4 m-4">Contact Us page</h1>
        <form>
          <input type="text" className="rounded-xl border border-black p-2 m-2" placeholder="name"/>
          <input type="text" className="rounded-xl border border-black p-2 m-2" placeholder="message"/>
          <button className="rounded-xl p-2 m-2 border bg-gray-100">Submit</button>
        </form>
    </div>
  )
}

export default Contact;