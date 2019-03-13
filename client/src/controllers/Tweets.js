import React, { Component } from 'react'
import DefaultLayout from './../layouts/Default'
import Tweets from './../containers/Tweets'

export default class TweetController extends Component {
  render() {
		return <DefaultLayout> 
			<Tweets screen_name={this.props.match.params.screen_name}/>
		</DefaultLayout>
  }
}
