import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPost } from '../../Actions/postActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const CreatePost = ({ addPost }) => {

    // const [description, setDescription] = useState('')
    // const [tag, setTag] = useState()


    const [form, setState] = useState({
        description: '',
        tag_list: ''
    })
    const onSubmit = () => {
        if (form.description === "" || form.tag_list === "") {
            M.toast({ html: 'Please enter the appropriate stuff' })
        } else {
            const newPost = {
                description: form.description,
                tag_list: form.tag_list
            }
            console.log(form)
            addPost(newPost)

            M.toast({ html: 'Post added' })
        }

    }


    return (
        <div id="add-post-modal" className="modal" style={modal}>
            <div className="modal-content">
                <h4>Enter some stuff</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                            name="description"

                            onChange={e => setState({ ...form, [e.target.name]: e.target.value })}
                        />
                        <label htmlFor="post" className="active">
                            Write a detailed description about your studying
                        </label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="tag_list"

                            onChange={e => setState({ ...form, [e.target.name]: e.target.value })}
                        />
                        <label htmlFor="tag" className="active">
                            Enter a tag
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves green btn-flat">Add</a>
            </div>
        </div>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired,
}

const modal = {
    width: '75%',
    height: '75%'
}
export default connect(null, { addPost })(CreatePost)