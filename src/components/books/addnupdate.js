export const AddNUpdate = () => {
    const errorBag = {
        "name": "",
        "page_count": "",
        "isbn": "",
        "author": ""
    }
    function formSubmit (e) {
        e.preventDefault()
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
                        ${errorBag.hasOwnProperty('name') ? 'border-red-500': ''}
                        rounded py-3 px-4 mb-3 
                        leading-tight
                        focus:outline-none 
                        focus:bg-white`}
                        id="grid-first-name" type="text" placeholder="Rich Dad Poor Dad, etc"/>
                    {errorBag.hasOwnProperty('name') && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/2 px-3 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Page Count
                    </label>
                    <input
                        className={`appearance-none block w-full
                         border
                         ${errorBag.hasOwnProperty('page_count') ? 'border-red-500': ''}
                         border-gray-200
                         rounded py-3 px-4 mb-3 
                         leading-tight
                         focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-last-name" type="text" placeholder="326, 333, etc"/>
                    {errorBag.hasOwnProperty('page_count') && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
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
                        ${errorBag.hasOwnProperty('page_count') ? 'border-red-500': ''}
                        border-gray-200 
                        rounded
                        py-3 px-4 mb-3
                        leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-city" type="text" placeholder="2222-888-00-0"/>
                    {errorBag.hasOwnProperty('isbn') && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
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
                             ${errorBag.hasOwnProperty('author') ? 'border-red-500': ''}
                             border-gray-200 
                             text-gray-700 
                             py-3 px-4 pr-8 mb-3  
                             rounded 
                             leading-tight 
                             focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="grid-state">
                            <option>Sasi</option>
                            <option>Kiran</option>
                            <option>Alaparthi</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                    {errorBag.hasOwnProperty('author') && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full h-12 pt-4 mt-2 flex place-content-center">
                    <button className="rounded bg-blue-600 pl-8 pr-8 font-bold text-white
                     disabled:opacity-50
                     disabled:cursor-not-allowed
                     cursor-pointer"
                     disabled={Object.keys(errorBag).length !== 0}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>)
}
