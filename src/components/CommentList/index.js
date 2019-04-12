import React from 'react';
import { Row, InputGroup, Button } from 'react-bootstrap';
import Constants from '../../constants';

const CommentListComponent = (props) => {
    const {commentArray} = props;
    console.log("comment",commentArray);
    const {} = Constants;
    return (
        <React.Fragment>
        <Row>
            {commentArray.map((data,index) => {
                return(
                    <div key={index}>
                        <div >{data}</div>
                        <InputGroup className="mb-3">
                        <input 
                            type="text"
                            name="commentValue"
                            onChange={(e) => props.onChangeSubValue(e.target.value)}
                        />
                        <InputGroup.Append>
					<Button variant="outline-secondary" onClick={() => props.submitSubValue(props.id)}>reply</Button>
					</InputGroup.Append>
				</InputGroup>
                    </div>
                );
            })}
            
        </Row>
        </React.Fragment>       
    );
};
export default CommentListComponent;


