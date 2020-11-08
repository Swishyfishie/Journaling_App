import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editPost } from '../../Actions/postActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const UpdatePost = ({ editPost, current }) => {


    const [form, setState] = useState({
        description: '',
        tag_list: ''

    })

    useEffect(() => {
        if (current) {
            setState({
                description: current.description,
                tag_list: current.tag_list
            })
        }
    }, [current])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.description === "" || form.tag_list === "") {
            M.toast({ html: 'Please enter the appropriate stuff' })
        } else {
            const updatePost = {
                id: current.id,
                description: form.description,
                tag_list: form.tag_list
            }

            // console.log(form
            editPost(updatePost)

            M.toast({ html: 'Post edited' })
            setState({
                description: '',
                tag_list: ''

            })
        }

    }


    return (
        <div id="update-post-modal" className="modal" style={modal}>
            <div className="modal-content">
                <h4>Edit stuff out</h4>
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input type="text"
                                name="description"
                                value={form.description}
                                onChange={e => setState({ ...form, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                name="tag_list"
                                value={form.tag_list}
                                onChange={e => setState({ ...form, [e.target.name]: e.target.value })}
                            />

                        </div>
                        <div className="modal-footer">
                            <button className="btn waves-effect waves-light modal-action modal-close" type="submit" name="action">Add
                                <i className="material-icons right">send</i>
                            </button>
                            {/* add styling to the submit button */}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

UpdatePost.propTypes = {
    editPost: PropTypes.func.isRequired,
}

const modal = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => ({
    current: state.post.current
})
export default connect(mapStateToProps, { editPost })(UpdatePost)