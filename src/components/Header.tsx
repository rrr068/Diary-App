import { Link } from "react-router-dom"

const user:boolean = false

const Header = () => {
  return (
      <header className="bg-white">
          <div className="container flex justify-between items-center mx-auto px-2 h-20">
              <h1><Link to="/" className="md:text-4xl text-3xl">Short Diary</Link></h1>
              <nav className="flex items-center gap-2">
                  <ul className="flex gap-2 items-center">
                      <li className="hidden lg:block"><a href="/create">日記を書く✏️</a></li>
                  </ul>
                  {user ?
                    (<div className="flex gap-3 items-center">
                    <div>
                        <img src="/user-icon.png" alt="" className="w-10 h-10 rounded-full"/>
                    </div>
                      <button className="bg-black text-white py-[7px] px-4 rounded-md">Logout</button>
                    </div>) :
                    (<button className="bg-black text-white py-[7px] px-4 rounded-md"><Link to="/login">ログイン</Link></button>)
                  }
              </nav>
          </div>
      </header>
  )
}

export default Header