import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Store from "../stores/store";
const store = Store.store;
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { firstname: "Ryan", lastname: "Peter" },
    };
  }

  getCompressed(addr) {
    const len = addr.length;
    return addr.substring(0, 6) + "..." + addr.substring(len - 5, len);
  }

  async componentWillMount() {}

  render() {
    return (
      <nav
        className={"flex items-center justify-between flex-wrap p-2 myHeader"}
      >
        <div class="flex flex-row items-center mr-6">
          <span class="text-white font-bold">Therapy App</span>
        </div>
        <div className="flex flex-row">
          {this.state.account && (
            <span className="p-2 font-bold text-white">
              {this.state.account.firstname} {this.state.account.lastname}
            </span>
          )}
          <Link to={`/`} className="p-2 px-4 text-white rounded bg-indigo-600">
            Home
          </Link>
          <Link
            to={`/about`}
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
