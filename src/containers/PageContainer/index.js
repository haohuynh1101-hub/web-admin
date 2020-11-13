import React from "react";
import PropTypes from "prop-types";
import "./pagecontainer.scss";
import Header from "./../../components/Header";
import MainContainer from "./../../containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainAction from "../MainAction";
import SearchBar from "../../components/SearchBar";

PageContainer.propTypes = {};

function PageContainer(props) {
  const mainContainer = () => <MainContainer />;
  const mainActionCreate = ({ history }) => <MainAction history={history} />;
  const mainActionEdit = ({ match, history }) => (
    <MainAction match={match} history={history} />
  );
  const searchbar = () => <SearchBar />;
  return (
    <Router>
      <div className="page-container">
        <Header />
        <Route path="/" exact component={mainContainer} />
        <Route path="/create" exact component={mainActionCreate} />
        <Route path="/edit/:id" exact component={mainActionEdit} />
      </div>
    </Router>
  );
}

export default PageContainer;
