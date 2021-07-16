import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from 'aphrodite';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification()} },
];

const styles = StyleSheet.create({
  body: {
    font-family: Arial, Helvetica, sans-serif;
  },
  footer: {
    font-family: Arial, Helvetica, sans-serif;
  }
})

class App extends React.Component {

  constructor(props) {
    super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static propTypes = {
	  logOut: PropTypes.func,
    isLoggedIn: PropTypes.bool
  };

  static defaultProps = {
	  logOut: () => {},
    isLoggedIn: false
  };

  handleKeyDown(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.body)}>
          <Header />
          <hr />
            {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <hr />
          <Footer className={css(styles.footer)} />
        </div>
      </>
    );
  }
}

export default App;
