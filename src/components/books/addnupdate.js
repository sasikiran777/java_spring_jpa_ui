import {getReq, postReq} from "../../http_handler";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AddNUpdate = () => {
    let navigation = useNavigate()
    const [data, setData] = useState({
        name: '',
        pageCount: '',
        isbn: '',
        author: ""
    })
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        getReq('author/list').then((response) => {
            setAuthors(response.data)
        })
    }, [])

    function formSubmit (e) {
        e.preventDefault()
        postReq("books/save", data).then((response) => {
            navigation("/books/list")
        })
    }

    return (<div className="flex place-content-center pt-14 h-auto">
        <form className="w-full max-w-lg bg-white pt-4 pl-4 pr-4 pb-4 rounded" onSubmit={formSubmit}>
            <h3 className="text-center mb-4 pt-2 pb-2 font-bold w-full bg-purple-600 text-white">Create Book</h3>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                        Name
                    </label>
                    <input
                        className={`appearance-none block w-full 
                        text-gray-700
                        border
                        ${data.name.length === 0 ? 'border-red-500': ''}
                        rounded py-3 px-4 mb-3 
                        leading-tight
                        focus:outline-none 
                        focus:bg-white`}
                        id="grid-first-name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData({...data, name: e.target.value})}
                        placeholder="Rich Dad Poor Dad, etc"/>
                    {data.name.length === 0 && <p className="text-red-500 text-xs italic">Name is Required</p>}
                </div>
                <div className="w-full md:w-1/2 px-3 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Page Count
                    </label>
                    <input
                        className={`appearance-none block w-full
                         border
                         ${data.pageCount.length === 0 ? 'border-red-500': ''}
                         border-gray-200
                         rounded py-3 px-4 mb-3 
                         leading-tight
                         focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-last-name" type="text" placeholder="326, 333, etc"
                        value={data.pageCount}
                        onChange={(e) => setData({...data, pageCount: e.target.value})}
                       />
                    {data.pageCount.length === 0 && <p className="text-red-500 text-xs italic">Page count required</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        ISBN
                    </label>
                    <input
                        className={`appearance-none block w-full text-gray-700 
                        border 
                        ${data.isbn.length === 0 ? 'border-red-500': ''}
                        border-gray-200 
                        rounded
                        py-3 px-4 mb-3
                        leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500`}
                        value={data.isbn}
                        onChange={(e) => setData({...data, isbn: e.target.value})}
                        id="grid-city" type="text" placeholder="2222-888-00-0"/>
                    {data.isbn.length === 0 && <p className="text-red-500 text-xs italic">ISBN Required.</p>}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-state">
                        Author
                    </label>
                    <div className="relative">
                        <select
                            className={`block appearance-none w-full
                             border
                             ${!data.author ? 'border-red-500': ''}
                             border-gray-200 
                             text-gray-700 
                             py-3 px-4 pr-8 mb-3  
                             rounded 
                             leading-tight 
                             focus:outline-none focus:bg-white focus:border-gray-500`}
                            value={data.author}
                            onChange={(e) => setData({...data, author: e.target.value})}
                            id="grid-state">
                            <option value="">Select Author</option>
                            {authors.map((value, key) => {
                                return <option value={value.id} key={key}>{value.name}</option>
                            })}
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                    {!data.author && <p className="text-red-500 text-xs italic">Please select Author</p>}
                </div>
                <div className="w-full h-12 pt-4 mt-2 flex place-content-center">
                    <button className="rounded bg-blue-600 pl-8 pr-8 font-bold text-white
                     disabled:opacity-50
                     disabled:cursor-not-allowed
                     cursor-pointer"
                     disabled={
                        data.name.length === 0 ||
                        data.isbn.length === 0 ||
                        data.pageCount.length === 0 ||
                        !data.author}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>)
}
