import React, { Component } from 'react';
import CommentListComponent from '../../components/CommentList';
import NavBarComponent from '../../components/NavBar';
import { Button, InputGroup } from 'react-bootstrap';
import Constants from '../../constants';
import { connect } from 'react-redux'
import {addNewComment} from '../../reducer/action';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: null,
			commentValue: '',
			commentList: [],
			idCount: 0,
			subCommentValue: '',
		};
		this.onChange = this.onChange.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
		this.onChangeSubValue = this.onChangeSubValue.bind(this);
		this.submitSubValue = this.submitSubValue.bind(this);
	}
	componentDidMount() {
		this.setState({
			isLoading: false,
		})
	}
	addNewComment() {
		const {commentValue, commentList} = this.state;
		if(commentValue) {
			const value = {
				id: this.state.idCount,
				comment: [commentValue],
			}
			console.log(value);
			commentList.push(value);
			console.log(commentList);
			this.setState({
				idCount: this.state.idCount + 1,
				commentList: commentList,
			})
			
		}
	}
	onChange(e) {
		this.setState({
			[e.target.name] :  e.target.value,
		})
	}
	onChangeSubValue(value) {
		this.setState({
			subCommentValue :  value,
		})
	}
	submitSubValue(id) {
		console.log(this.state.commentList);
		this.state.commentList.map((data,index) => {
			if(data.id === id) {
				data.comment.push(this.state.subCommentValue);
			}
		})
	}
	render() {
		const {  reactAssignment } = Constants;
		const {commentList} = this.state;
		console.log("index",commentList);
		const {commentValue} = this.state;
		if (this.state.isLoading) {
			return (
			  <div className="custom-loading-text">
				Loading.....
			  </div>
			);
		}
		return (
			<div className="m-5">
				<NavBarComponent color="info" variant="dark" title={reactAssignment}/>
				{commentList.map((data,index) => {
					return (
						<CommentListComponent id={data.id} submitSubValue ={this.submitSubValue }onChangeSubValue={this.onChangeSubValue} key={index} commentArray={data.comment}/>
					)					
				})}
				
					<InputGroup className="mb-3">
					<input 
						type="text"
						name="commentValue"
						value={commentValue}
						onChange={this.onChange}
					/>
					<InputGroup.Append>
					<Button variant="outline-secondary" onClick={this.addNewComment}>add new</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		commentList: state.commentList,
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		addNewComment: data => {
			dispatch(addNewComment(data))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
