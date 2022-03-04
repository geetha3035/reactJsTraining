import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    // onClickHandler = () => {
    //     this.getPost();
    // };

    componentDidMount(){
        this.getPost();
      }
    
    getPost() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                //console.log(response);
                this.setState({
                    posts: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
          <div>
            {/* <button onClick={this.onClickHandler} className="btn btn-primary">
              Get Data
            </button> */}
            <h1 className="text-center">All Post</h1>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post) => (
                  <tr>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    export default PostList;
    