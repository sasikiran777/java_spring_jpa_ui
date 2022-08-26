import {useState} from "react";
import {postReq} from "../../../http_handler";

export const CreateNUpdate = () => {
    const [data, setData] = useState({
        name: '',
        achievements: "",
        email: "",
        password: ""
    })
    function formSubmit (e) {
        e.preventDefault()
        postReq("author/save", data).then((response) => {
            console.log(response.data)
        })
    }
    return (<div className="flex place-content-center pt-14 h-auto">
        <form className="w-full max-w-lg bg-white pt-4 pl-4 pr-4 pb-4 rounded" onSubmit={formSubmit}>
            <h3 className="text-center mb-4 pt-2 pb-2 font-bold w-full bg-purple-600 text-white">Create Author</h3>
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
                        Achievements
                    </label>
                    <input
                        className={`appearance-none block w-full
                         border
                         ${data.achievements.length === 0 ? 'border-red-500': ''}
                         border-gray-200
                         rounded py-3 px-4 mb-3 
                         leading-tight
                         focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-last-name" type="text" placeholder="326, 333, etc"
                        value={data.achievements}
                        onChange={(e) => setData({...data, achievements: e.target.value})}
                    />
                    {data.achievements.length === 0 && <p className="text-red-500 text-xs italic">Achievements required</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                        Email
                    </label>
                    <input
                        className={`appearance-none block w-full 
                        text-gray-700
                        border
                        ${data.email.length === 0 ? 'border-red-500': ''}
                        rounded py-3 px-4 mb-3 
                        leading-tight
                        focus:outline-none 
                        focus:bg-white`}
                        id="grid-first-name"
                        type="text"
                        value={data.email}
                        onChange={(e) => setData({...data, email: e.target.value})}
                        placeholder="jhondoe@gmail.com"/>
                    {data.email.length === 0 && <p className="text-red-500 text-xs italic">Email is Required</p>}
                </div>
                <div className="w-full md:w-1/2 px-3 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Password
                    </label>
                    <input
                        className={`appearance-none block w-full
                         border
                         ${data.password.length === 0 ? 'border-red-500': ''}
                         border-gray-200
                         rounded py-3 px-4 mb-3 
                         leading-tight
                         focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-last-name" type="text" placeholder="Asd@1234"
                        value={data.password}
                        onChange={(e) => setData({...data, password: e.target.value})}
                    />
                    {data.password.length === 0 && <p className="text-red-500 text-xs italic">Password required</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full h-12 pt-4 mt-2 flex place-content-center">
                    <button className="rounded bg-blue-600 pl-8 pr-8 font-bold text-white
                     disabled:opacity-50
                     disabled:cursor-not-allowed
                     cursor-pointer"
                            disabled={
                                data.name.length === 0 ||
                                data.achievements.length === 0 ||
                                data.email.length === 0 ||
                                data.password.length === 0}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>)
}
