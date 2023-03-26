import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

// pages
import { Login } from "./pages/Login/Login"
import { Search } from "./pages/Search/Search"

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='findmed-website/login' element={<Login />} />
				<Route path='findmed-website/search' element={<Search />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
