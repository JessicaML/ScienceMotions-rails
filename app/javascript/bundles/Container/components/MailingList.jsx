import PropTypes from 'prop-types';
import React from 'react';

export default class FeaturedLessons extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
        <footer id="footer" className="container">
        <div class="row">
            <div class="col-md-12 portfolio-item">
                <div id="mc_embed_signup">
                    <form action="//jhn.us16.list-manage.com/subscribe/post-json?u=70d8e0ea2d8800a5f4e06792c&amp;id=b5095bc718&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <div>
                                <span> <i><p>Science is about how shapes move in space, so we think animation is the best way to explain it... and we want to explain it in a way that's as fun to look at as MTV.</p></i></span>
                            </div>
                            <label className="subscription" for="mce-EMAIL">Subscribe to our mailing list!</label>
                            <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL" placeholder="email address" required />

                            <div class="clear">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                            </div>
                        </div>
                        <div id="notification_container"></div>
                    </form>
                </div>
            </div>
        </div>
        <script src="js/jquery.js"></script>
    </footer>



    );
  }
}
