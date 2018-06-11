import React from 'react';

// const witClasss = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const witClasss = (WrappedComponent, className) => {
  const WithClass = class extends React.Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };
  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};

export default witClasss;
