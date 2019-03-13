import React, { Component } from 'react'
import { Link } from "react-router-dom"
import DefaultLayout from './../layouts/Default'

export default class HomeController extends Component {
  render() {
		return <DefaultLayout> 
        <div>
          <h1>Node React demo</h1>
          <ul>
            <li>
              <Link to="/tweets/@cnnbrk">Show last ten tweets from CNN</Link>
            </li>
            <li>
              <Link to="/tweets/@bbcnews">Show last ten tweets from BBC News</Link>
            </li>
            <li>
              <Link to="/tweets/@itv">Show last ten tweets from ITV</Link>
            </li>
          </ul>

          <hr />
			</div>
			</DefaultLayout>
  }
}
