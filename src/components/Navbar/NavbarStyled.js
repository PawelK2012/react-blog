import React from 'react'
import styled from 'styled-components'

const StayVisible = styled.div`
position: absolute;
  margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
  transition: margin .2s;
  z-index: 99999;
`
// export const NavToggleButton = (props) => {
//     return (
//         <StayVisible
//         {...props}
//         >
//             <FloatingActionButton
//              onClick={props.toggle}
//             >
//                 <Menu />
//             </FloatingActionButton>
//         </StayVisible>

//     )
// }