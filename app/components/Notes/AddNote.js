import React from 'react';

class AddNote extends React.Component {
	handleSubmit(){
		// The new note input has a ref of 'note'; so get the DOM node
		// whose ref is 'note'
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(newNote);
	}
	render(){
		return (
			<div className="input-group">
				<input type="text" className="form-control" ref="note" placeholder="Add new note" />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>
						Submit
					</button>
				</span>
			</div>
		);
	}
};

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default AddNote;

