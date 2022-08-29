import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Error.css';

class Error extends React.Component {
  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <>
        <>
          <h1>Your search had an error.</h1>
          <p id="errorMessage">{this.props.errors}</p>
          <Button onClick={this.refreshPage} variant="danger" type="submit">
            Try Again?
          </Button>
        </>
      </>
    );
  }
}

export default Error;