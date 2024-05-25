import {Link} from "react-router-dom";

export function SignUp() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://d3l793awsc655b.cloudfront.net/blog/wp-content/uploads/2021/05/VS_Blog-Images_2-14.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    placeholder="Full Name" />

                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email" />

                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password" />
                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
                                    placeholder="Confirm Password" />

                            </div>
                        </div>
                        <div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Already a member?</a><br/>
                        <Link to= "/signin" className="font-semibold leading-6 text-blue-400 hover:text-indigo-500"> Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}