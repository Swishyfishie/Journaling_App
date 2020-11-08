import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="materialize-textarea" />
                            <label for="icon_telephone">Phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">Message</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Send me a message
                    <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact