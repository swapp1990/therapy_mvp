import React, { useState, useEffect } from "react";

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Iconly } from "react-iconly";

import { country_icon_svg, city_icon_svg, landmark_icon_svg } from "./icons";

export default function Home() {
  let { path, url } = useRouteMatch();
  const Styles = {
    filterOption: {
      color: "#000000",
      fontWeight: 600,
      fontSize: "22px",
      fontStyle: "normal",
    },
    sortSelectedOption: {
      backgroundColor: "",
      border: "0px solid rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
      padding: "10px",
      width: "100px",
    },
    sortOptionsBtn: {
      fontWeight: 600,
      fontSize: "22px",
    },
  };
  return (
    <>
      <div className="flex flex-row home" style={{ height: "90vh" }}>
        <aside
          className="sidebar"
          style={{
            backgroundColor: "rgba(196, 196, 196,0.2)",
            width: "18%",
          }}
        >
          <div className="sidebar-header flex py-4 px-2">
            <span
              className="self-start"
              style={{
                color: "#000000",
                fontWeight: 600,
                fontSize: "50px",
                fontStyle: "normal",
                lineHeight: "73px",
              }}
            >
              Menu
            </span>
          </div>
          <div className="sidebar-content">
            <ul className="flex flex-col w-full">
              <li>
                <a
                  href="#"
                  className="flex flex-row justify-between items-center rounded-lg h-20 px-3 "
                >
                  <span style={Styles.filterOption}>Home</span>
                  <Iconly
                    name="ChevronDownCircle"
                    set="two-tone"
                    primaryColor="black"
                    size="large"
                  />
                </a>
                <div className="flex items-center px-3">
                  <span
                    style={{
                      border: "1px solid #000000",
                      width: "100%",
                      opacity: "0.1",
                    }}
                  ></span>
                </div>
              </li>
              <li className="my-px">
                <a
                  href="#"
                  className="flex flex-row justify-between items-center rounded-lg h-20 px-3 "
                >
                  <span style={Styles.filterOption}>Mood</span>
                  <Iconly
                    name="ChevronDownCircle"
                    set="two-tone"
                    primaryColor="black"
                    size="large"
                  />
                </a>
                <div className="flex items-center px-3">
                  <span
                    style={{
                      border: "1px solid #000000",
                      width: "100%",
                      opacity: "0.1",
                    }}
                  ></span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-row justify-between  items-center rounded-lg h-20 px-3 "
                >
                  <span style={Styles.filterOption}>Status</span>
                  <Iconly
                    name="ChevronDownCircle"
                    set="two-tone"
                    primaryColor="black"
                    size="large"
                  />
                </a>
                <div className="flex items-center px-3">
                  <span
                    style={{
                      border: "1px solid #000000",
                      width: "100%",
                      opacity: "0.1",
                    }}
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main flex flex-col flex-grow">
          <div className="flex flex-col">
            <div className="px-8 mt-4 flex flex-col w-100 justify-center">
              <div
                className="self-center rounded-lg flex flex-col cursor-pointer justify-center"
                style={{
                  width: "700px",
                  height: "100%",
                  boxShadow: "2px 2px 4px 2px rgba(255,233, 0, 0.25)",
                }}
              >
                <div
                  className="text-black flex justify-items-start"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                  }}
                >
                  <div className="m-4">
                    <Iconly
                      name="ChevronDownCircle"
                      set="two-tone"
                      primaryColor="black"
                      size="large"
                    />
                  </div>
                  <div className="m-4 flex flex-col">
                    <div className="text-xl">My Mood</div>
                    <div className="text-sm">
                      Share your thought and feelings
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="self-center rounded-lg flex flex-col cursor-pointer justify-center"
                style={{
                  width: "700px",
                  height: "100%",
                  boxShadow: "2px 2px 4px 2px rgba(255,233, 0, 0.25)",
                }}
              >
                <div
                  className="text-black flex justify-items-start"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                  }}
                >
                  <div className="m-4">
                    <Iconly
                      name="ChevronDownCircle"
                      set="two-tone"
                      primaryColor="black"
                      size="large"
                    />
                  </div>
                  <div className="m-4 flex flex-col">
                    <div className="text-xl">Library</div>
                    <div className="text-sm">
                      Browse articles, audio and video clips
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="self-center rounded-lg flex flex-col cursor-pointer justify-center"
                style={{
                  width: "700px",
                  height: "100%",
                  boxShadow: "2px 2px 4px 2px rgba(255,233, 0, 0.25)",
                }}
              >
                <div
                  className="text-black flex justify-items-start"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                  }}
                >
                  <div className="m-4">
                    <Iconly
                      name="ChevronDownCircle"
                      set="two-tone"
                      primaryColor="black"
                      size="large"
                    />
                  </div>
                  <div className="m-4 flex flex-col">
                    <div className="text-xl">Insights</div>
                    <div className="text-sm">
                      Your stats and professional advice
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 mb-2">
              <Link
                to={`/market`}
                className="rounded p-4 mr-2 ml-8 mb-2"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "90px",
                }}
              >
                <span
                  className="text-4xl"
                  style={{
                    color: "#FFCA0E",
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontStyle: "normal",
                    lineHeight: "96%",
                  }}
                >
                  Explore
                </span>
              </Link>
            </div>
            <hr />
            <div className="flex flex-col">
              <div className="px-8 mt-4 flex justify-center">
                <span class="text-4xl font-semibold">Browse By</span>
              </div>

              <div className="px-8 mt-4 flex flex-row w-100 justify-center space-x-8">
                <div
                  className="rounded-lg flex flex-col cursor-pointer"
                  style={{
                    width: "300px",
                    height: "250px",
                    boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
                  }}
                >
                  <div
                    className="bg-purple-400 m-2 mb-0"
                    style={{ height: "80%" }}
                  >
                    {country_icon_svg}
                  </div>
                  <div
                    className="flex justify-center"
                    style={{ height: "20%" }}
                  >
                    <span
                      className="text-xl self-center"
                      style={{
                        color: "#FFCA0E",
                        fontFamily: "Montserrat",
                        fontWeight: 900,
                        fontStyle: "normal",
                        lineHeight: "96%",
                      }}
                    >
                      COUNTRY
                    </span>
                  </div>
                </div>
                <Link
                  to={`/market`}
                  className="rounded-lg flex flex-col cursor-pointer"
                  style={{
                    width: "300px",
                    height: "250px",
                    boxShadow: "0px 4px 4px rgba(0, 255, 0, 0.25)",
                  }}
                >
                  <div
                    className="bg-purple-400 m-2 mb-0"
                    style={{ height: "80%" }}
                  >
                    {city_icon_svg}
                  </div>
                  <div
                    className="flex justify-center"
                    style={{ height: "20%" }}
                  >
                    <span
                      className="text-xl self-center"
                      style={{
                        color: "#FFCA0E",
                        fontFamily: "Montserrat",
                        fontWeight: 900,
                        fontStyle: "normal",
                        lineHeight: "96%",
                      }}
                    >
                      CITY
                    </span>
                  </div>
                </Link>
                <div
                  className="rounded-lg flex flex-col cursor-pointer"
                  style={{
                    width: "300px",
                    height: "250px",
                    boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
                  }}
                >
                  <div
                    className="bg-purple-400 m-2 mb-0"
                    style={{ height: "80%" }}
                  >
                    {landmark_icon_svg}
                  </div>
                  <div
                    className="flex justify-center"
                    style={{ height: "20%" }}
                  >
                    <span
                      className="text-xl self-center"
                      style={{
                        color: "#FFCA0E",
                        fontFamily: "Montserrat",
                        fontWeight: 900,
                        fontStyle: "normal",
                        lineHeight: "96%",
                      }}
                    >
                      LANDMARK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
