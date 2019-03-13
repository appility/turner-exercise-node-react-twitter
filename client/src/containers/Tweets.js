import React, { Component } from 'react'
import Spinner from "react-svg-spinner"
import Centred from './../components/Centred'
import TweetList from './../components/Tweets'

export default class Tweets extends Component {

  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      error: false,
      isLoaded: false,
      data: null
    }
  }

  handleResponse(response) {
    return response.json()
      .then((json) => {
        if (!response.ok) {
          const error = Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText,
          });
        return Promise.reject(error)
        }
      return json
    });
  }

  componentDidMount() {
    let url = `http://localhost:30000/api/getTweets/${this.props.screen_name}`
    //var url = `http://localhost:30000/api/getTweets/sdwqd`
    //debugger
    //var url = '/data.json'
    fetch(url)
    .then(this.handleResponse)
    .then(json => {
      this.setState({
        data: json,
        isLoaded: true
      })})
    .catch(error => {
      this.setState({
         error: true
      })})
  }

  render() {
    const { error, isLoaded, data } = this.state
    if (error) {
      return  <p>Oops! Error getting tweets.</p>
    } else if (!isLoaded) {
      return <Centred><Spinner size="48px" /></Centred>
    } else {
      return <TweetList items={data} />
    }
  }
}
