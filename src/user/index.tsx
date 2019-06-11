import React from 'react'
import {Link} from "react-router-dom";
export default class User extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Link to='/user/detail'>UserDetail</Link>
            </div>
        );
    }
}
