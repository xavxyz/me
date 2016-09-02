import React from 'react';
import Header from './Header';

import './CallToAction.css';

const CallToAction = () => (
  <div id="mc_embed_signup">
    <form action="//hacklearnmake.us13.list-manage.com/subscribe/post?u=9beb9bd4162802837ea34bb53&amp;id=1c43f2f329" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="CallToAction" target="_blank" noValidate>
      <input type="text" placeholder="Your Firstname" name="FNAME" className="required email" id="mce-FNAME"/>
      <input type="email" placeholder="Your Email" name="EMAIL" className="required email" id="mce-EMAIL"/>
      <input type="submit" value="Let's go to work!" name="subscribe" id="mc-embedded-subscribe" className="CallToAction__submit"/>
    </form>
  </div>
);

// note: after building with gatsby, this kind of form can't work (all static)
// class CallToAction extends React.Component {
//   constructor() {
//     super();
//     this.submitForm = this.submitForm.bind(this);
//     this.storeChanges = this.storeChanges.bind(this);

//     this.state = {
//       email: '',
//       firstname: '',
//       afterSubmit: false,
//     };
//   }

//   submitForm(e) {
//     e.preventDefault();
//     const { email, firstname } = this.state;

//     fetch(`http://xav-express.herokuapp.com/email?email=${email}&firstname=${firstname}`)
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         if (json.message === 'success') {
//           this.setState({afterSubmit: true});
//         } else {
//           console.log('something wrong happened');
//         }
//       });
//   }

//   storeChanges(field) {
//     return e => {
//       this.setState({
//         [field]: e.target.value,
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Header 
//           main="I'm available for hire"
//           meta="Each project begins with a conversation. If you’re ready to get the conversation rolling, enter your contact in the boxes below!"
//           color="dark"
//           animatedWordIndex={ 1 }
//         />
//         {
//           this.state.afterSubmit ? (
//             <div className="CallToAction__afterSubmit">
//               <Header
//                 main="Success!"
//                 meta="I will contact you soon!"
//                 color="dark"
//                 animatedWordIndex={ 0 }
//               />
//             </div>
//           ) : (
//             <form className="CallToAction">
//               <input type="text" name="firstname" value={this.state.firstname} onChange={this.storeChanges('firstname')} placeholder="Your Firstname" />
//               <input type="email" name="email" value={this.state.email} onChange={this.storeChanges('email')} placeholder="Your Email" />
//               <button className="CallToAction__submit" onClick={ this.submitForm }><span>Let's go to work!</span></button>
//             </form>
//           )
//         }
//       </div>
//     )
//   }
// };

export default CallToAction;
