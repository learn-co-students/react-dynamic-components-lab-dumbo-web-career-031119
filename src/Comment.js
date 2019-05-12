// add Comment component here
import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                {this.props.commentText}
            </div>
        )
    }
}


// import React, { Component } from 'react';

// export default class ColorBox extends Component {

//   render() {
//     return (
//       <div className="color-box" style={{opacity: 2}}>
//         {/* your conditional code here! */}
//       </div>
//     )
//   }

// }
