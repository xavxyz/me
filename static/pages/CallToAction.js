import React from 'react';
import Header from './Header';

import './CallToAction.css';

class CallToAction extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.storeChanges = this.storeChanges.bind(this);

    this.state = {
      name: '',
      email: '',
    };
  }

  submitForm(e) {
    e.preventDefault();

    const body = new FormData();
    body.append("EMAIL", this.state.email);
    body.append("FNAME", this.state.name);
    body.append("double_optin", false);

  }

  storeChanges(field) {
    return e => {
      this.setState({
        [field]: e.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <Header 
          main="I'm available for hire"
          meta="Each project begins with a conversation. If you’re ready to get the conversation rolling, enter your contact in the boxes below!"
          color="dark"
          animatedWordIndex={ 1 }
        />
        {
          this.state.afterSubmit ? (
            <div className="CallToAction__afterSubmit">
              <Header
                main="Success!"
                meta="Will be back soon"
                color="dark"
                animatedWordIndex={ 0 }
              />
            </div>
          ) : (
            <form className="CallToAction" onSubmit={ this.submitForm }>
              <input type="text" name="name" value={this.state.name} onChange={this.storeChanges('name')} placeholder="Your Firstname" />
              <input type="text" name="email" value={this.state.email} onChange={this.storeChanges('email')}placeholder="Your Email" />
              <button className="CallToAction__submit"><span>Let's go to work!</span></button>
            </form>
          )
        }
      </div>
    )
  }
};

export default CallToAction;
