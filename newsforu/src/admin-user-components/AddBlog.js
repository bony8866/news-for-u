import React, { Component } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import './AddBlog.modules.css';

class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            image: '',
            body: '',
            category: 'Uncategorized',
            date: new Date().toLocaleString(),
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this)


    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleBodyChange(body) {
        this.setState({ body });
    }
    handleFormSubmit = e => {
    
    }
    render() {
        const { heading, image, body, category, date } = this.state;
        return (
            <div className="container-fluid main-content-div">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group row field-container">
                        <label className="col-sm-1 col-form-label">Heading</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} required></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label className="col-sm-1 col-form-label">Banner Image</label>
                        <div className="col-sm-4">
                            <input type="file" id="image" name="image" onChange={this.handleChange} value={image}></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label className="col-sm-1 col-form-label">Body</label>
                        <div className="col-sm">
                            <Editor name="body"
                                value={body}
                                init={{
                                    height: 400,
                                    menubar: false
                                }}
                                onEditorChange={this.handleBodyChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label className="col-sm-1 col-form-label">Category</label>
                        <div className="col-sm">
                            <select name="category" value={category} onChange={this.handleChange}>
                                <option value="Uncategorized">Uncategorized</option>
                                <option value="Sports">Sports</option>
                                <option value="Politics">Politics</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Stocks">Stocks</option>

                            </select>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label className="col-sm-1 col-form-label">Publish Date</label>
                        <div className="col-sm">
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-1 submit-btn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBlog;
