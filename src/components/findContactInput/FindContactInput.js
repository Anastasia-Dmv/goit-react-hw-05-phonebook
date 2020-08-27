import React from 'react';

export default function FindContactInput({ value, onChangeFilter }) {
  return (
    <div className="find-input_frame ">
      <label>
        <input
          className="input"
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        ></input>
      </label>
    </div>
  );
}

// export default class FindContactInput extends Component {
//   render() {
//     const { filter, onChangeFilter } = this.props;
//     return (
//       <div className="find-input_frame ">
//         <label>
//           <input
//             className="input"
//             type="text"
//             value={value}
//         onChange={(e) => onChangeFilter(e.target.value)}
//           ></input>
//         </label>
//       </div>
//     );
//   }
// }
