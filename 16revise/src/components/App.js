import React, { Fragment, useState } from "react";
import Form from "./Form";

// export class ClassBasedApp extends Component {
//   state = { count: 0 };
//   incrementMeOnClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   //   UNSAFE_componentWillUpdate() {
//   //     console.log("I can Use running on every rerender", this.state.count);
//   //   }

//   UNSAFE_componentWillMount() {
//     console.log("I run only once at starting");
//   }

//   render() {
//     return (
//       <Fragment>
//         <h1> I am A Counter App from Class Based APP </h1>
//         <h2>My Current Count is : {this.state.count}</h2>

//         <button onClick={this.incrementMeOnClick}>
//           Click Me To Increment The Count
//         </button>
//       </Fragment>
//     );
//   }
// }

// export default () => {
//   const [count, setCount] = useState(0);
//   const increamentOnClick = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {});

//   return (
//     <Fragment>
//       <h1> I am A Counter App </h1>
//       <h2>My Current Count is : {count}</h2>
//       <button onClick={increamentOnClick}>
//         Click Me To Increment The Count
//       </button>
//       <div>
//         {count === 5 ? "Ok I Rendered Conditionally when count became 5" : ""}
//       </div>
//     </Fragment>
//   );
// };

export default () => {
  const [name, setName] = useState("");

  const onFormSubmit = (ev, value) => {
    ev.preventDefault();
    setName(value);
  };

  return (
    <Fragment>
      <h1>My Name is {name}</h1>
      <Form onFormSubmit={onFormSubmit} />
    </Fragment>
  );
};
