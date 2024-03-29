import React, { createRef } from "react";
import Headers from "../../../components/Header";
import Navbar from "../../../components/navAdmin";
import clientPromise from "../../../lib/mongodb";
import { withSessionSsr } from "../../../lib/getSession";
import dynamic from "next/dynamic"
const NoSsrWysiwyg = dynamic(() => import('../../../components/WysiwygEditor'), { ssr: false })


export default class BlogEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            labels: (
                props.data.labels.length ? props.data.labels.map((label, i) => {
                    return <li key={i} className="cursor-pointer mb-2" onClick={this.removeLabel.bind(this)}>{label}</li>
                }) : null
            ),
            iLabel: "",
        }
        this.saveChange = this.saveChange.bind(this)
        this.addLabel = this.addLabel.bind(this)
        this.removeLabel = this.removeLabel.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.editorRef = createRef();
    }
    async saveChange(e) {
        e.preventDefault()
        var dataForm = {
            ...this.state.data,
            title: e.target.title.value,
            link: e.target.link.value,
            post: this.editorRef.current.editorInst.getMarkdown(),
            labels: this.state.data.labels,
            short: e.target.short.value
        }
        const fetchData = await fetch('/api/postUpdate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm),
        }).then(x => x.json());
        if (fetchData.status == 200) {
            if (fetchData.isNew) window.location.href = `/admin/editor/${e.target.link.value}`
            alert("Saved!")
        }
        else alert(`Failed to save change\n\nerror:\n${fetchData.error}`)
    }
    addLabel() {
        if (!this.state.iLabel) return false
        if (this.state.data.labels.includes(this.state.iLabel)) return false
        this.state.data.labels.push(this.state.iLabel)
        this.setState({
            ...this.state,
            labels: (
                this.state.data.labels.length ? this.state.data.labels.map((label, i) => {
                    return <li key={i} className="cursor-pointer mb-2" onClick={this.removeLabel.bind(this)}>{label}</li>
                }) : null
            ),
            iLabel: ""
        })
    }
    removeLabel(e) {
        this.state.data.labels.splice(this.state.data.labels.indexOf(e.target.innerHTML), 1)
        this.setState({
            ...this.state,
            labels: (
                this.state.data.labels.length ? this.state.data.labels.map((label, i) => {
                    return <li key={i} className="cursor-pointer mb-2" onClick={this.removeLabel}>{label}</li>
                }) : null
            ),
            iLabel: ""
        })
    }
    handleInputChange(event) {
        const target = event.target;
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    }
    enterBTN(e) {
        if (e.keyCode == 13) {
            document.getElementById("addLabelB").click()
            e.preventDefault()
        }
    }
    render() {
        return (
            <React.Fragment>
                <Headers title="Content edit" />
                <div className="mx-auto max-w-4xl px-2 xl:max-w-5xl">
                    <div className="flex h-screen flex-col justify-between">
                        <Navbar />
                        <form action="#" onSubmit={this.saveChange} >
                            <div className="md:flex md:items-center mb-2">
                                <div className="mr-10">
                                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Title
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="title" defaultValue={this.state.data.title} required />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-4">
                                <div className="mr-10">
                                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Link
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="link" defaultValue={this.state.data.link} required />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-2">
                                <div className="mr-10">
                                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Short
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input autoComplete="off" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="short" defaultValue={this.state.data.short} />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-4">
                                <div className="mr-10">
                                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0">
                                        Add label
                                    </label>
                                </div>
                                <div className="md:w-1/3">
                                    <input id="addLabel" autoComplete="off" onKeyDown={this.enterBTN} value={this.state.iLabel} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" type="text" name="iLabel" onChange={this.handleInputChange} />
                                </div>
                                <div className="w-1/4">
                                    <button id="addLabelB" className="mb-2 md:w-full duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={this.addLabel}>
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-4">
                                <div className="mr-10">
                                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-2">
                                        Labels
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <ul className="list-disc">
                                        {this.state.labels}
                                    </ul>
                                </div>
                            </div>
                            <button className="mb-2 md:w-2/3 duration-300 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                                Save
                            </button>
                        </form>
                        <div className="block py-10">
                            <NoSsrWysiwyg editorRef={this.editorRef} initialValue={this.state.data.post} />
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ res, query, req }) {
        if (!req.session?.state?.isLoggedIn) {
            return {
                redirect: {
                    destination: '/admin/login',
                    permanent: false,
                }
            }
        } else {
            var { bid } = query
            bid = bid.join('/')
            let getDB
            if (bid == "new") {
                getDB = {
                    title: "",
                    link: "",
                    post: "",
                    labels: []
                }
            } else {
                const db = await clientPromise
                getDB = await db.db('personal-blog').collection('blog-post').findOne({ link: bid })
                if (!getDB) {
                    return {
                        redirect: {
                            destination: '/404',
                            permanent: false,
                        }
                    }
                }
            }
            return {
                props: {
                    data: JSON.parse(JSON.stringify(getDB))
                }
            }
        }
    }
);