import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="section">
                <NavLink to="/userdata" >PAGE 1</NavLink>
                <NavLink to="/piechart" >PAGE 2</NavLink>
            </div>
        </>
    )
}